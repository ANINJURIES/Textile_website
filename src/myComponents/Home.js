import React from 'react'
import './home.css'
import Nav from './Nav'
import Footer from './Footer'



const Home = () => {
  
  return (
    <>
    <div className='home'>
      <Nav />

      <div className='image'></div>
    
      <div className='gridbox'>
        <div className='grid'>fabric1</div>
        <div className='grid'>fabric2</div>
        <div className='grid'>fabric3</div>
        <div className='grid'>planning4</div>
        <div className='grid'>planning5</div>
        <div className='grid'>planning6</div>
        <div className='grid'>machine7</div>
        <div className='grid'>machine8</div>
        <div className='grid'>machine9</div>
      </div>

    </div>
      <Footer/>
      </>

  )
}

export default Home