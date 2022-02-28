import React from 'react'
import {Carousel} from 'react-bootstrap'
import Screenshotone from '../assets/Screenshotone.png'
import Screenshottwo from '../assets/Screenshottwo.png'
import Screenshotthree from '../assets/Screenshotthree.png'

const CarouselComponent = () => {
  return (
    <div style={{backgroundColor:'black'}}>
        <Carousel>
  <Carousel.Item>
    <img
      src={Screenshotone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>HireUp Mobile App</h3>
      <p>You'll have your own profile, to work or hire.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Screenshottwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>HireUp Mobile App</h3>
      <p>Find freelancers from multiple fields.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Screenshotthree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>HireUp Mobile App</h3>
      <p>Choose the freelancer that you wnat to work with.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComponent