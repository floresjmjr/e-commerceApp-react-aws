import React, { Component } from 'react'
import './Header.css';
import { Link } from 'react-router-dom'
import Nav from './Nav/Nav';

class Header extends Component {

  state = {
    search: false,
  }

  displaySearchBox = () =>{
    this.setState({search: !this.state.search})    
  }

  render() {

    let search = <React.Fragment></React.Fragment>

    if(this.state.search) {
      search = (
      
        <div className='SearchBoxContainer'>
          <input type='text' name='searchBox' placeholder='Search'/>
        </div>

      )
    }

    return (
      <header className='PageHeader'>
        <div className='HeaderContainer'>
          <div className='TopHeader'>
            <div className='Logo'>
              <p className='fas fa-utensils'><Link to='/'><span>Home Kitchen</span></Link></p>
            </div>
            <div className='UserOptions'>
              <div className='Search'>
                <div className='fas fa-search' onClick={this.displaySearchBox}></div>
              </div>
              <div className='UserAccount'>
                <p className='fas fa-user'><span>Account</span></p>
              </div>
              <div className='ShoppingCart'>
                <Link to='/ShoppingCart' className='fas fa-shopping-cart'></Link>
                <div className='ShoppingCartSummary'>
                </div>
              </div>
            </div>
          </div>
          <Nav />
        </div>
        {search}
      </header>
    )


  }
}



export default Header;