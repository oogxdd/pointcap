import React, { Fragment } from 'react'
import posed from 'react-pose'
import { tween } from 'popmotion'
import { interpolate } from 'flubber'

const paths = {
  plane:
    'M0.959991 193V4.47407C0.959991 1.27929 4.52057 -0.626279 7.17879 1.14587L289.968 189.672C292.343 191.255 292.343 194.745 289.968 196.328L7.17879 384.854C4.52057 386.626 0.959991 384.721 0.959991 381.526V193Z',
  circle:
    'M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z',
  heart:
    'M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55 C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z',
  bookmark:
    'M357,0H102C73.95,0,51,22.95,51,51v408l178.5-76.5L408,459V51C408,22.95,385.05,0,357,0z'
}

const pathIds = Object.keys(paths)

const morphTransition = ({ from, to }) =>
  tween({
    from: 0,
    to: 1
  }).pipe(interpolate(from, to))

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition
    }

    return config
  }, {})
)

const NextButton = posed.button({
  hoverable: true,
  pressable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
  press: { scale: 0.8 }
})

class Example extends React.Component {
  state = { pathIndex: 0 }

  gotoNext = () => {
    const { pathIndex } = this.state
    const nextIndex = pathIndex + 1
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
    })
  }

  render() {
    return (
      <Fragment>
        <svg width="400" height="400" viewBox="0 0 520 500">
          <Icon pose={pathIds[this.state.pathIndex]} />
        </svg>
        <NextButton onClick={this.gotoNext}>Next icon!</NextButton>
      </Fragment>
    )
  }
}

export default Example
