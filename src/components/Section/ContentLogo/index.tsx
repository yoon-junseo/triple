import React from 'react'

import * as Styled from './style'

interface ContentLogoProps {
  duration: string
  delay: string
  children: React.ReactNode
}

const ContentLogo = ({ duration, delay, children }: ContentLogoProps) => {
  return (
    <Styled.Wrapper duration={duration} delay={delay}>
      {children}
    </Styled.Wrapper>
  )
}

export default ContentLogo
