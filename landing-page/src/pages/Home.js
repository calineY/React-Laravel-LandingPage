import React from 'react'
import CarouselComponent from '../components/CarouselComponent'



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
    </div>
  )
}

export default Home
