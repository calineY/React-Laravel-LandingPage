import React from 'react'
import {Carousel} from 'react-bootstrap'
import Screenshotone from '../assets/Screenshotone.png'
import Screenshottwo from '../assets/Screenshottwo.png'
import Screenshotthree from '../assets/Screenshotthree.png'

const CarouselComponent = () => {
  return (
    <div style={{backgroundColor:'black',height:'550px'}}>
        <Carousel>
  <Carousel.Item>
    <img
      src={Screenshotone}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>HireUp Mobile App</h3>
      <p>You'll have your own profile, to hire or get hired.</p>
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
      <p>Choose the freelancer that you want to work with.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComponent