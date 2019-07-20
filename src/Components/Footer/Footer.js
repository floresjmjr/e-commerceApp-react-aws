import React, { Component } from 'react'
import './Footer.css';

import SocialMedia from './SocialMedia/SocialMedia';

import FacebookImg from './Images/facebook.png';
import InstagramImg from './Images/instagram.png';
import TwitterImg from './Images/twitter.png';
import YoutubeImg from './Images/youtube.png';
import FooterLinks from './FooterLinks/FooterLinks';


class Footer extends Component {

  state = {
    email: '',
  }

  emailSubFormHandler = (event) => {
    event.preventDefault();
    alert('Subscribed to Promotions!')
    if(this.state.email.match(/\S+@\S+\.\S+/)){
      document.querySelector('aside').style.display = 'none';
    } else {
      alert('Please provide a valid email');
    }
  }

  updateEmailHandler = (event) =>{
    this.setState({email: event.target.value})
  }

  render() {

    return (
    
      <footer>
        <aside>
          <form className='EmailSubscription' onSubmit={this.emailSubFormHandler}>
            <input type='email' name='email' onChange={this.updateEmailHandler} value={this.state.email}
              placeholder='Subscribe for deals and promotions!'/>
            <button type='submit' name='submitButton'>Submit</button>
          </form>
        </aside>
        <div className='SocialMediaContainer'>
          <SocialMedia 
            destination={'https://www.facebook.com/'} 
            image={FacebookImg}/>
          <SocialMedia 
            destination={'https://www.instagram.com/'} 
            image={InstagramImg}/>
          <SocialMedia 
            destination={'https://twitter.com/'} 
            image={TwitterImg}/> 
          <SocialMedia 
            destination={'https://www.youtube.com/'} 
            image={YoutubeImg}/>                       
        </div>
        <FooterLinks />
      </footer>
    )

  }

}



export default Footer;