import { useEffect, useState } from 'react'

// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const updateMousePosition = (e) => setPosition({ x: e.clientX, y: e.clientY })

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])
  return position
}
