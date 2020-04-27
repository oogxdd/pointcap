import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'
import { AnimationContainer } from 'styles'

class App extends React.Component {
  state = {
    flag: false,
    max: `
      M0,
      0 150,
      0 150,
      50 0,
      50
    `,
    med: `
      M0,
      0 150,
      0 150,
      50 0,
      50
    `
  }

  toggle = () => this.setState((state) => ({ flag: !state.flag }))

  render() {
    const { flag, max, med } = this.state

    return (
      <AnimationContainer>
        <svg viewBox="0 0 30 24" width="600" height="600" onClick={this.toggle}>
          <Spring native to={{ d: flag ? max : med }}>
            {(props) => <animated.path {...props} />}
          </Spring>
        </svg>
      </AnimationContainer>
    )
  }
}

export default App
