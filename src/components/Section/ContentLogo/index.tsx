import React from 'react'

import { FadeInUpContainerProps } from '@/types/animation'

import * as Styled from './style'

export interface ContentLogoProps extends FadeInUpContainerProps {
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
