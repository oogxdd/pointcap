import React, { useState, useCallback, useEffect } from 'react'
import { useEventListener } from 'hooks'
import { RecordButton, Play } from 'styles'
import AsyncLoop from './AsyncLoop'

const App = () => {
  const [actions, setActions] = useState([])
  const [isRecording, setRecording] = useState(false)
  const [isRecorded, setRecorded] = useState(false)

  const recordCoordinates = ({ clientX: x, clientY: y }, type) => {
    const action = {
      type,
      x,
      y,
      time: Date.now()
    }

    setActions((actions) => [...actions, action])
    // console.log(`${type}: x: ${x}, y: ${y}`)
  }

  const onMove = useCallback(
    (e) => isRecording && recordCoordinates(e, 'Move'),
    [isRecording]
  )

  const onClick = useCallback(
    (e) => isRecording && recordCoordinates(e, 'Click'),
    [isRecording]
  )

  useEventListener('mousemove', onMove)
  useEventListener('click', onClick)

  const stop = () => {
    setRecording(false)
    setRecorded(true)
  }
  const record = () => {
    setRecording(true)
    setRecorded(false)
    setActions([])
  }

  return (
    <>
      <AsyncLoop actions={actions} />
      {isRecorded ? (
        <Play />
      ) : (
        <RecordButton
          onClick={isRecording ? stop : record}
          recording={isRecording}
        />
      )}
    </>
  )
}

export default App

// {isRecording ? <Stop onClick={stop} /> : <Record onClick={record} />}
