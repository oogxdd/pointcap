import React from 'react'

import { ScrollUpContainer, Button } from 'styles/ScrollUp'

export default () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ScrollUpContainer>
      <Button onClick={scrollToTop}>Scroll up</Button>
    </ScrollUpContainer>
  )
}
