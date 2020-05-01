import React, { useState, useCallback, useEffect } from 'react'
import { TweenLite, TimelineMax, Back, Power4 } from 'gsap'
import { useEventListener } from 'hooks'
import useSound from 'use-sound'

import Landing from 'components/Landing'
import Player from 'components/Player'

import recSound from 'sounds/VideoRecord.ogg'
import stopSound from 'sounds/VideoRecordori.ogg'
import playSound from 'sounds/Lockori.ogg'
import playEndSound from 'sounds/Unlockori.ogg'

import { RECORD_COLOR, STOP_COLOR, PLAY_COLOR } from 'styles/colors'

const App = () => {
  const [actions, setActions] = useState([])
  const [isRecording, setRecording] = useState(false)
  const [isRecorded, setRecorded] = useState(false)
  const [isPlaying, setPlaying] = useState(false)

  const [playRecSound] = useSound(recSound)
  const [playStopSound] = useSound(stopSound)
  const [playPlaySound] = useSound(playSound)
  const [playPlayEndSound] = useSound(playEndSound)

  useEffect(() => {
    window.MorphSVGPlugin.convertToPath(
      'circle, rect, ellipse, line, polygon, polyline'
    )

    TweenLite.set('svg', {
      visibility: 'visible'
    })
  }, [])

  var tl = new TimelineMax({
    delay: 0
  })

  const morphToSquare = () =>
    tl.to('#circle', 0.5, {
      morphSVG: {
        shape: '#square'
      },
      stroke: STOP_COLOR,
      fill: STOP_COLOR,
      ease: Back.easeInOut
    })

  const morphToTriangle = () =>
    tl.to('#circle', 0.5, {
      morphSVG: {
        shape: '#star'
      },
      stroke: PLAY_COLOR,
      fill: PLAY_COLOR,
      ease: Power4.easeOut
    })

  const morphToCircle = () =>
    tl.to('#circle', 0.5, {
      morphSVG: {
        shape: '#circle'
      },
      stroke: RECORD_COLOR,
      fill: RECORD_COLOR,
      ease: Back.easeInOut
    })

  const recordCoordinates = ({ clientX: x, clientY: y }, type) => {
    const action = {
      type,
      x,
      y,
      time: Date.now()
    }

    setActions((actions) => [...actions, action])
  }

  const onMove = useCallback(
    (e) => isRecording && recordCoordinates(e, 'Move'),
    [isRecording]
  )

  useEventListener('mousemove', onMove)

  const record = () => {
    setRecording(true)

    document.title = 'Recording...'
    document.getElementById('favicon').href = '/icons/stop.svg'

    playRecSound()
    morphToSquare()
  }

  const stop = () => {
    if (actions.length > 0) {
      setRecording(false)
      setRecorded(true)

      document.title = 'Play'
      document.getElementById('favicon').href = '/icons/play.svg'

      playStopSound()
      morphToTriangle()
    }
  }

  const play = () => {
    setPlaying(true)

    document.title = 'Playing...'

    playPlaySound()
    morphToSquare()
  }

  const onPlayed = () => {
    setPlaying(false)

    // Erase previous recording
    setRecorded(false)
    setActions([])

    document.title = 'Pointcap'
    document.getElementById('favicon').href = '/icons/rec.svg'

    playPlayEndSound()
    morphToCircle()
  }

  const onClick = () => {
    if (!isRecorded) {
      if (isRecording) {
        stop()
      } else {
        record()
      }
    }

    if (isRecorded && !isPlaying) {
      play()
    }
  }

  return (
    <>
      <Landing
        isRecording={isRecording}
        isPlaying={isPlaying}
        onShapeClick={onClick}
        showTip={isRecording && actions.length < 50}
      />
      <Player isPlaying={isPlaying} onPlayed={onPlayed} actions={actions} />
    </>
  )
}

export default App
