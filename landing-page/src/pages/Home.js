import React from 'react'
import AboutUs from '../components/AboutUs'
import CarouselComponent from '../components/CarouselComponent'
import Services from '../components/Services'



const Home = () => {
  return (
    <div>
        <h1 className='title'>Find someone that will get the job done.</h1>
        <h2 className='title1'>HireUp is the app where you can hire freelancers and find freelance jobs.</h2>
        <div style={{marginBottom:'25px'}}>
        <h2>Check it out</h2>
        <span className='icon'>&#8681;</span>
        </div>
        <CarouselComponent/>
        <div className='aboutus'>
            <AboutUs/>
        </div>
        <div className='aboutus'>
            <Services/>
        </div>
    </div>
  )
}

export default Home
