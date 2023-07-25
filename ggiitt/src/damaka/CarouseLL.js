import React, { useState, useEffect, useRef } from 'react';
import './CarouseLL.css';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


export const CarouseLL = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const slideshowRef = useRef()

  useEffect(() => {
      slideshowRef.current?.children[0].classList.add('active')
  }, [])

  const handleRight = () => {
      const activeElement = slideshowRef.current?.querySelector('.active')
      if (activeElement?.nextElementSibling) {
          activeElement.classList.remove('active')
          activeElement.nextElementSibling.classList.add('active')
          setScrollPosition(scrollPosition - activeElement.offsetWidth)
      }
  }
  const handleLeft = () => {
      const activeElement = slideshowRef.current?.querySelector('.active')
      if (activeElement?.previousElementSibling) {
          activeElement.classList.remove('active')
          activeElement.previousElementSibling.classList.add('active')
          setScrollPosition(scrollPosition + activeElement.offsetWidth)
      }
  }

return (
    <div className="slideshow-container">
        <BsChevronCompactLeft className='left-arrow' onClick={handleLeft} />
        <BsChevronCompactRight className='right-arrow' onClick={handleRight} />
        
        <div className="slideshow" style={{ transform: `translateX(${scrollPosition}px)` }} ref={slideshowRef}>
            <div className="carousel-container">
                <img className="carousel-image" src="modelzord02.jpg" alt="" />
            </div>
            <div className="carousel-container">
              <img className="carousel-image" src="modelzord01.jpg" alt=""/>
            </div>
            <div className="carousel-container">
              <img className="carousel-image" src="zordbags.jpg" alt="" />
            </div>
          {/* <img className="carousel-image" src="Zord2.jpeg" alt="Image 2"/>
          <img className="carousel-image" src="Zordshop.jpeg" alt="Image 3" /> */}
          </div>
  </div>
  )
}

export default CarouseLL

