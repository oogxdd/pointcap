import React, { useState, useCallback, useEffect } from 'react'
import { TweenLite, TimelineMax, Back, Power3 } from 'gsap'
import { useEventListener } from 'hooks'
import { Container, ShapeWrapper, Tip } from 'styles'
import useSound from 'use-sound'

import MorphingShape from './MorphingShape'
import Player from './Player'

import { RECORD_COLOR, STOP_COLOR, PLAY_COLOR } from 'styles/colors'

import recSound from 'sounds/VideoRecord.ogg'
import stopSound from 'sounds/VideoRecordori.ogg'
import playSound from 'sounds/Lockori.ogg'
import playEndSound from 'sounds/Unlockori.ogg'

const App = () => {
  const [actions, setActions] = useState([])
  const [isRecording, setRecording] = useState(false)
  const [isRecorded, setRecorded] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const [rotateDegree, setRotateDegree] = useState(0)

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
      ease: Power3.easeOut
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

    // console.log(`${type}: x: ${x}, y: ${y}`)
    setActions((actions) => [...actions, action])
  }

  const onMove = useCallback(
    (e) => isRecording && recordCoordinates(e, 'Move'),
    [isRecording]
  )

  // const onClick = useCallback(
  //   (e) => isRecording && recordCoordinates(e, 'Click'),
  //   [isRecording]
  // )

  useEventListener('mousemove', onMove)
  // useEventListener('click', onClick)

  const record = () => {
    setRecording(true)

    document.title = 'Recording...'
    document.getElementById('favicon').href = '/icons/stop.svg'

    playRecSound()
    morphToSquare()
    setRotateDegree(90)
  }

  const stop = () => {
    if (actions.length > 0) {
      setRecording(false)
      setRecorded(true)

      document.title = 'Play'
      document.getElementById('favicon').href = '/icons/play.svg'

      playStopSound()
      morphToTriangle()
      setRotateDegree(180)
    }
  }

  const play = () => {
    setPlaying(true)

    document.title = 'Playing...'

    playPlaySound()
    morphToSquare()
    setRotateDegree(270)
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
    setRotateDegree(360)
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
    <Container>
      <ShapeWrapper
        onClick={onClick}
        style={{
          cursor: isPlaying ? 'none' : 'pointer'
          // transform: `rotate(${rotateDegree}deg)`
        }}
      >
        <MorphingShape />
      </ShapeWrapper>

      <Tip show={isRecording && actions.length < 50}>Move mouse around</Tip>
      <Player actions={actions} isPlaying={isPlaying} onPlayed={onPlayed} />
    </Container>
  )
}

export default App

// {isRecorded ? (
//   isPlaying ? (
//     <RecordButton recording notAllowed />
//   ) : (
//     <Play onClick={play} />
//   )
// ) : (
//   <RecordButton
//     onClick={isRecording ? stop : record}
//     recording={isRecording}
//   />
// )}
