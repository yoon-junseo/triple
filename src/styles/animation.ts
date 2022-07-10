import { css, keyframes } from 'styled-components'

import { FadeInUpProps } from '@/types/animation'

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const fadeInUpAnimation = css<FadeInUpProps>`
  animation: ${fadeInUp} ${({ duration }) => duration} ${({ delay }) => delay}
    forwards;
`
