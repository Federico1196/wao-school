import React from 'react';
import '../styles/Home.css';
import { HashLink as Link } from 'react-router-hash-link'; 
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BannerImage from "../assets/R.jpg"

function Home() {
  return (
    <>
        <div className="Home" style={{ backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
              <h1>WAO Driving School & Services</h1>
              <br />
              <p>Your roadtrip starts here / Tu camino comienza aqui</p>
              <div className='homeOptions'>
                <Link to="/Service#serviceTitle" style={{ textDecoration: 'none' }}>
                    <button className='Packages'> Lessons & Packages 
                    <div className='sign'><DirectionsCarIcon /></div>
                    </button>
                </Link>
                <Link smooth to="/Service#place" style={{ textDecoration: 'none' }}> 
                    <button className='Services'> Legal Services 
                    <div className='sign'> <MenuBookIcon /></div>
                    </button>
                </Link>
              </div>     
            </div>
        </div>
    </>
  )
}

export default Home;
