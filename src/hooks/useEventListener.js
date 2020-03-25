import { useRef, useEffect } from 'react'

// https://usehooks.com/useEventListener/
export const useEventListener = (
  eventName,
  handler,
  condition,
  element = document
) => {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const isSupported = element && element.addEventListener
    if (!isSupported) return

    if (!condition) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, condition])
}
