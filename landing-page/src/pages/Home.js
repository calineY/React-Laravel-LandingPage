import React from 'react'
import AboutUs from '../components/AboutUs'
import CarouselComponent from '../components/CarouselComponent'
import ContactUs from '../components/ContactUs'
import Services from '../components/Services'
import Navigation from '../components/Navigation'


const Home = () => {
  return (
    <div className='containerFluid'>
        <Navigation/>
        <div className='homediv'>
            <h1 className='title1'>HireUp</h1> 
            <h2 className='subtitle'>Hire freelancers and find freelance jobs.</h2>
            <h1 className='title'>Find someone who will get the job done.</h1>
        </div>
        <div className='findout'>
            <h2>Find out more</h2>
            <span className='icon'>&#8681;</span>
        </div>
        <CarouselComponent/>
        <div className='aboutus'>
            <AboutUs/>
        </div>
        <div className='aboutus'>
            <Services/>
        </div>
        <ContactUs/>
    </div>
  )
}

export default Home
