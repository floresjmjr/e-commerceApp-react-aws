import React from 'react'
import './Footer.css';

import SocialMedia from './SocialMedia/SocialMedia';

import FacebookImg from './Images/facebook.png';
import InstagramImg from './Images/instagram.png';
import TwitterImg from './Images/twitter.png';
import YoutubeImg from './Images/youtube.png';

const footer = () => {

  return (
  
    <footer>
      <div className='footerContent'>
        <section className='Services'>
          <h5 className='FooterTitles'>Service</h5>
          <ul className='FooterLists'>
            <li>Contact Us</li>
            <li>FAQS</li>
            <li>Shipping</li>
          </ul>
          <ul className='FooterLists'>
            <li>Track Order</li>
            <li>Exchanges & Returns</li>
          </ul>
          <div className='SocialMediaContainer'>
            <SocialMedia 
              destination={'https://www.facebook.com/pages/Rishi-Tea/39035256828'} 
              image={FacebookImg}/>
            <SocialMedia 
              destination={'https://www.instagram.com/rishitea/'} 
              image={InstagramImg}/>
            <SocialMedia 
              destination={'https://twitter.com/RishiTea'} 
              image={TwitterImg}/> 
            <SocialMedia 
              destination={'https://www.youtube.com/c/RishiTea-Botanicals'} 
              image={YoutubeImg}/>                       
          </div>
          <div className='ContactInfo'>
            <p>Customer Service</p>
            <p>1-(800) 123-4567 | M-F 9AM to 7pm EST</p>
          </div>
        </section>
        <section className='Company'>
          <h5 className='FooterTitles'>Company</h5>
          <ul className='FooterLists'>
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Gifts</li>
          </ul>
          <ul className='FooterLists'>
            <li>Wholesale</li>
            <li>Catalogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <div className='Copyright'>
            <p>&#9400; 2019 Jorge Flores</p>
          </div>
        </section>
        
      </div>
    </footer>
  
  )

}



export default footer;