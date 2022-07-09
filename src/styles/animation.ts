import styled, { keyframes } from 'styled-components'

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

export const FadeInUpContainer = styled.div<{
  duration: string
  delay: string
}>`
  animation: ${fadeInUp} ${({ duration }) => duration} ${({ delay }) => delay}
    forwards;
`
