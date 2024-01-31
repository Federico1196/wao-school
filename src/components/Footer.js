import React from 'react';
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="socialMedia">
                 <LocalPhoneIcon /> <EmailIcon /> <InstagramIcon /> <FacebookIcon />
            </div>
            <p> &copy; 2024 waodrivingschool.com</p>
        </div>
    </>
  )
}

export default Footer