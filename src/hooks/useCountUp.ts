import { useState, useEffect, useRef } from 'react'

import { easeOutExpo } from '@/lib/util/animation'

export interface UseCountUpProps {
  endNumber: number
  duration: number
}

const useCountUp = ({ endNumber, duration }: UseCountUpProps) => {
  const [count, setCount] = useState<number>(0)
  const requestAnimationFrameId = useRef<number>(0)

  const countUpAnimationHandler = (timestamp: number) => {
    const progress = easeOutExpo(timestamp / duration)
    setCount(Math.ceil(endNumber * progress))

    if (progress >= 1) {
      cancelAnimationFrame(requestAnimationFrameId.current)
      return
    }

    requestAnimationFrameId.current = requestAnimationFrame(
      countUpAnimationHandler,
    )
  }

  useEffect(() => {
    requestAnimationFrameId.current = requestAnimationFrame(
      countUpAnimationHandler,
    )
  }, [])

  return count
}

export default useCountUp
