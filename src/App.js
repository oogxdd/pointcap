import React, { useState, useCallback } from 'react'
import { useEventListener } from 'hooks'
import { RecordButton } from 'styles'

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

  const stop = () => setRecording(false)
  const record = () => setRecording(true)

  return (
    <RecordButton
      onClick={isRecording ? stop : record}
      recording={isRecording}
    />
  )
}

export default App

// import { Record, Stop } from 'styles'
// {isRecording ? <Stop onClick={stop} /> : <Record onClick={record} />}
