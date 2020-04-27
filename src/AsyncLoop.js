import React, { useState, useEffect } from 'react'
import Cursor from './assets/icons/cursor.svg'

// const actions = [
//   {
//     x: 90,
//     y: 10,
//     time: 0
//   },
//   {
//     x: 90,
//     y: 300,
//     time: 200
//   },
//   {
//     x: 90,
//     y: 500,
//     time: 300
//   }
// ]

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default ({ actions, drawTrigger }) => {
  const [xCoordinate, setX] = useState(actions[0] ? actions[0].x : 0)
  const [yCoordinate, setY] = useState(actions[0] ? actions[0].y : 0)

  const draw = async () => {
    for await (let [index, action] of actions.entries()) {
      setX(action.x)
      setY(action.y)

      let timeDelta = 0

      // if it's not last element
      if (index !== actions.length - 1) {
        // calculate time delta
        timeDelta = actions[index + 1].time - action.time
      }

      await timeout(timeDelta)
    }
  }

  useEffect(() => {
    if (drawTrigger) {
      draw()
    }
  }, [drawTrigger])

  return (
    <Cursor
      style={{
        visibility: drawTrigger ? 'visible' : 'hidden',
        position: 'fixed',
        left: xCoordinate,
        top: yCoordinate
      }}
    />
  )
}
