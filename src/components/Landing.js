import React from 'react'

import Shape from 'components/Shape'
import Todo from 'components/Todo'
import ScrollUp from 'components/ScrollUp'

import { Container, Tip } from 'styles/Landing'

export default ({ isRecording, isPlaying, onShapeClick, showTip }) => (
  <Container>
    <Shape
      onClick={onShapeClick}
      style={{ cursor: isPlaying ? 'none' : 'pointer' }}
    />
    <Tip show={showTip}>Move mouse around</Tip>
    <Todo />
    <ScrollUp />
  </Container>
)
