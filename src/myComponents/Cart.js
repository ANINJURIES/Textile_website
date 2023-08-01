import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './cart.css'
import Nav from './Nav';
import Footer from './Footer';



const Cart = () => {
  const location = useLocation();

  const navigate = useNavigate();
  
  const arr = location.state.cart;
  

  
  



  return (

    <>

      <Nav />

      <h1>Cart</h1>


      <div className='cart'>
    {
      arr.map((values, index) =>{

        const { id, title, imageurl, desciption, price } = values;
        index = id;

      <div>
        <h2>{arr.id}</h2>
      </div>        



    

        return (

          <div className='box_shadow' key={index}>

          <div className='img'>
              <img src={imageurl} alt='' />
          </div>

          <div className='title'>
              <h4>{title}</h4>
          </div>

          <div className='desciption'>
              <h6>{desciption}</h6>
          </div>

          <div>
            <h4> price : {price}</h4>
          </div>



      </div>


         

       )

      })
    }
      </div>

  

      <button className='btn' onClick={() => navigate('/home')}>Home</button>

      <Footer />
    </>


  )
}

export default Cart