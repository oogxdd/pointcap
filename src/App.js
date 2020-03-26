import React, { useState, useCallback } from 'react'
import { useEventListener } from 'hooks'
import { Button } from 'styles'

const App = () => {
  const [isRecording, setRecording] = useState(false)

  const printCoordinates = ({ clientX: x, clientY: y }, type) =>
    console.log(`${type}: x: ${x}, y: ${y}`)

  const onMove = useCallback(
    (e) => isRecording && printCoordinates(e, 'Move'),
    [isRecording]
  )

  const onClick = useCallback(
    (e) => isRecording && printCoordinates(e, 'Click'),
    [isRecording]
  )

  useEventListener('mousemove', onMove)
  useEventListener('click', onClick)

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
