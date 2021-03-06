import React from 'react'

const footerLinks = () =>{

  return (
    <div className='ServiceAndCompanyContainer'>
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
          <p>&#9400; 2021 Jorge Flores</p>
        </div>
      </section>
    </div>
  )


}


export default footerLinks;