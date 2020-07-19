import { useState, useEffect } from 'react'
import { size } from '../baseStylesResponsive'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  const isMobile = width <= size.laptop
  return {
    width,
    height,
    isMobile
  }
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
