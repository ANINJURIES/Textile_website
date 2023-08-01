import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {

  const { loginWithRedirect, logout, isAuthenticated} = useAuth0();
  return (
    <>
      <nav>
        <ul >

          {isAuthenticated ?

            <li>
              <button className='authbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </li>

            :

            <li>
              <button className='authbtn' onClick={() => loginWithRedirect()}>Log In</button>
            </li>


          }

         

          
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/material">Material</Link></li> */}
          {/* <li><Link to="/cart">Cart</Link></li> */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav