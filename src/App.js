import React, { useState } from 'react'
import { useEventListener } from 'hooks'
import { Button } from 'styles'

const App = () => {
  const [isRecording, setRecording] = useState(false)

  const printCoordinates = ({ clientX: x, clientY: y }, type) =>
    console.log(`${type}: x: ${x}, y: ${y}`)

  const onMove = (e) => printCoordinates(e, 'Move')
  const onClick = (e) => printCoordinates(e, 'Click')

  useEventListener('mousemove', onMove, isRecording)
  useEventListener('click', onClick, isRecording)

  return (
    <div>
      {isRecording ? (
        <Button onClick={() => setRecording(false)}>Stop</Button>
      ) : (
        <Button onClick={() => setRecording(true)}>Record</Button>
      )}
    </div>
  )
}

export default App
