import styled from 'styled-components'

import { FadeInUpProps } from '@/types/animation'

import Theme from '@/styles/Theme'
import { fadeInUpAnimation } from '@/styles/animation'

export const Wrapper = styled.div<FadeInUpProps>`
  position: absolute;
  top: 150px;

  width: 400px;
  height: 338px;

  padding-top: 280px;

  background-image: url('/images/triple2x.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 400px 338px;

  text-align: center;
  font-size: 15px;
  color: ${Theme.grayColor700};

  ${fadeInUpAnimation}
`
