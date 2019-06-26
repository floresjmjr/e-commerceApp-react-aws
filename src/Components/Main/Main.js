import React from 'react'

import './Main.css'
import backgroundImage from '../../Images/quincy-alivio-UvgzVZimyWU-unsplash.svg'


const main = () => {

  return (
  
    <main> 
      <div className='FrontPicture'>
        <img className='FrontCoffeeImg' src={backgroundImage} alt=''/>
      </div>
      <div className='CoffeeTypesDouble'>
        <img className='FrontCoffeeImg' src={'https://via.placeholder.com/450'} alt=''/>
        <img className='FrontCoffeeImg' src={'https://via.placeholder.com/450'} alt=''/>
      </div>
      <div className='CoffeeTypesSingle'>
        <h3>Lorem Ipsum</h3>
        <img className='BottomCoffeeImg' src={'https://via.placeholder.com/450x150'} alt=''/>
      </div>
       
    </main>
  
  )

}



export default main;