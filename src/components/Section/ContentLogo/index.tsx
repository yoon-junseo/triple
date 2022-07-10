import React from 'react'

import { FadeInUpProps } from '@/types/animation'

import * as Styled from './style'

export interface ContentLogoProps extends FadeInUpProps {
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
