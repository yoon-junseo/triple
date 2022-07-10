import styled from 'styled-components'

import { FadeInUpProps } from '@/types/animation'

import { fadeInUpAnimation } from '@/styles/animation'

export const Container = styled.section`
  min-width: 1200px;
  display: flex;
  justify-content: center;
`

export const ResponsiveContainer = styled.div``

export const MetricsContainer = styled.div<FadeInUpProps>`
  margin-left: 623px;
  padding-top: 150px;

  ${fadeInUpAnimation}
`

export const AwardsContainer = styled.div<FadeInUpProps>`
  display: flex;

  margin: 50px 0px 140px 623px;

  white-space: nowrap;

  vertical-align: baseline;

  ${fadeInUpAnimation}
`
