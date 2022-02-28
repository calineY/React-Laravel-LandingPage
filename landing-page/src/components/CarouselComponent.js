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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Screenshottwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      src={Screenshotthree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselComponent