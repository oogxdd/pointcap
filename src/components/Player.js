import React, { useState, useEffect } from 'react'
import Cursor from 'icons/cursor.svg'

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default ({ actions, isPlaying, onPlayed }) => {
  const [xCoordinate, setX] = useState(actions[0] ? actions[0].x : 0)
  const [yCoordinate, setY] = useState(actions[0] ? actions[0].y : 0)

  const draw = async () => {
    for await (let [index, action] of actions.entries()) {
      if (action.x) setX(action.x)
      if (action.y) setY(action.y)
      if (action.scroll) window.scrollTo(0, action.scroll)
      if (action.target && action.target.click) action.target.click()
      if (action.input) action.input.value = action.value

      if (action.type === 'InputFocus') {
        document.getElementById('input').focus()
      }

      if (action.type === 'InputBlur') {
        document.getElementById('input').blur()
      }

      let timeDelta = 0

      const isLastAction = index === actions.length - 1

      if (!isLastAction) {
        // Calculate time delta
        timeDelta = actions[index + 1].time - action.time
      } else {
        onPlayed()
      }

      await timeout(timeDelta)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      draw()
    }
  }, [isPlaying])

  return (
    <Cursor
      style={{
        display: isPlaying && xCoordinate !== 0 ? 'block' : 'none',
        position: 'fixed',
        left: xCoordinate,
        top: yCoordinate
      }}
    />
  )
}
