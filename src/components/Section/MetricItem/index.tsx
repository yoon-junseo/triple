import React from 'react'

import useCountUp from '@/hooks/useCountUp'

import * as Styled from './style'

interface MetricItemProps {
  endNumber: number
  duration: number
  unit: string
  content: string
}

const MetricItem = ({
  endNumber,
  duration,
  unit,
  content,
}: MetricItemProps) => {
  return (
    <Styled.Wrapper>
      <strong>
        <span>{useCountUp({ endNumber, duration })}</span>
        {unit}
      </strong>
      {content}
    </Styled.Wrapper>
  )
}

export default MetricItem
