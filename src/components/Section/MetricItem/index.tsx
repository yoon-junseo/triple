import React from 'react'

import useCountUp, { UseCountUpProps } from '@/hooks/useCountUp'

import * as Styled from './style'

export interface MetricItemProps extends UseCountUpProps {
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
