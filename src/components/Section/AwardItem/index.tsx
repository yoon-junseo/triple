import React from 'react'

import * as Styled from './style'

export interface AwardItemProps {
  imgUrl: string
  children: React.ReactNode
}

const AwardItem = ({ imgUrl, children }: AwardItemProps) => {
  return <Styled.Wrapper imgUrl={imgUrl}>{children}</Styled.Wrapper>
}

export default AwardItem
