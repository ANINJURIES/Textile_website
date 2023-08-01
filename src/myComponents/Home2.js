import React, { useState } from 'react'
import './home2.css'
import { list } from '../Data/Data'
import Nav from './Nav'
import Footer from './Footer'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";



const Home2 = () => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    // can add profie photo of user 
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();








    return (
        <>
            <Nav />


            {isAuthenticated && <p className='username'> Welcome, {user.name} !</p>}

            <div className='imgcon'>
                <div className='coverimg'>
                </div>

            </div>






            <div className='contnet_grid3_mtop'>
                {


                    list.map((val, index) => {
                        const { id, title, imageurl, desciption, price } = val;
                        index = id;



                        const showAlert = () => {

                            setCart([...cart, { id, title, imageurl, desciption, price }])



                        };



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


                                <Button className='button' onClick={showAlert}>Add to cart</Button>


                            </div>



                        )
                    })
                }
            </div>

            {
                isAuthenticated ? <button className='buynow' onClick={() => navigate('/cart', { state: { cart: cart } })}>Buy now</button> : <button className='buybtn' onClick={() => loginWithRedirect()}>Please log in to buy</button>
            }




            <Footer />

        </>
    )
}

export default Home2