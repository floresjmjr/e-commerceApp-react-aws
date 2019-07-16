import React, { Component } from 'react'
import './Header.css';
import { Link, withRouter } from 'react-router-dom'
import Nav from './Nav/Nav';
import MobileMenu from './MobileMenu/MobileMenu';
import SubCatList from './SubCatList/SubCatList';

class Header extends Component {

  state = {
    search: false,
    categories: [
      "Kitchen & Dining", 
      "Artwork", 
      "Furniture", 
      "Bedding", 
      "Storage & Organization", 
      "Bath", 
      "Heating, Cooling & Air Quality", 
      "Irons & Steamers", 
      "Vacuums & Floor Care",
    ],
    showMobileMenu: false,
    navLinks: 'categories',
  }


  displaySearchBox = () =>{
    this.setState({search: !this.state.search})    
  }

  toggleMobileMenu = () => {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }

  componentDidMount() {
    window.addEventListener('resize', ()=>{
      this.setState({windowWidth: window.innerWidth})
      if(window.innerWidth > 800) {
        if(this.state.showMobileMenu) {
          this.setState({showMobileMenu: false})
        }
        if(!(this.state.navLinks === 'categories')) {
          this.setState({navLinks: 'categories'})
        }
      } else {
        if(this.state.navLinks === 'categories') {
          this.setState({navLinks: 'subcategories'})
        }
      }  
    })
  }


  goToSubcategoryPage = (event) =>{
    console.log('event', event.target.value);
    this.props.history.push({
      pathname: event.target.value
    });
  }


  render() {

    console.log('props', window.location.pathname)


    let search = <React.Fragment></React.Fragment>

    if(this.state.search) {
      search = (
        <div className='SearchBoxContainer'>
          <input type='text' name='searchBox' placeholder='Search'/>
        </div>
      )
    }

    let navLinks;
    if(window.innerWidth > 800) {
      navLinks = <Nav categories={this.state.categories}/>
    } else {
      let paths = window.location.pathname.split('Category');
      if(paths.length === 2) {
        const category = decodeURIComponent(window.location.pathname.split('/',3)[2])
        navLinks = <SubCatList subcategoryPage={this.goToSubcategoryPage} category={category} />
      }
    }

    

    return (
      <header className='PageHeader'>
        <div className='HeaderContainer'>
          <div className='TopHeader'>
            <MobileMenu 
              toggleMenu={this.toggleMobileMenu} 
              show={this.state.showMobileMenu}
              categories={this.state.categories}/>
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
          {navLinks}
        </div>
        {search}
      </header>
    )


  }
}



export default withRouter(Header);