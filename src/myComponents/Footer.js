
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import './footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='somedia'>
                <FacebookIcon />
                <InstagramIcon />
                <MailOutlineIcon />
                <LinkedInIcon />
                <TwitterIcon />
            </div>

            <div className='maillabel'>
                <h2 className='mail'>sign for our newsletter</h2>
                <input className='mail' type="text" value="Enter mail"/>
                <input className='mail' type="submit" value="Submit"/>

            </div>

            <div className='text'>
                <p>this is the website for textile, you can contact us by placed social media icons and gmail input tag</p>
            </div>
            <h2 className='foots'> 2023<CopyrightIcon/> textile website</h2>

        </footer>
    )
}

export default Footer