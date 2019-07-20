import React from 'react';
import './PaymentFields.css';

const paymentFields = (props) =>{

  const months = (
    <select name='expMonth'>
      <option value=''></option>
      <option value="January">January</option>
      <option value="February">February</option>
      <option value="March">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="December">December</option>
    </select>
  )

  const years = (
    <select >
      <option value=''></option>
      <option value='2019'>2019</option>
      <option value='2020'>2020</option>
      <option value='2021'>2021</option>
      <option value='2022'>2022</option>
      <option value='2023'>2023</option>
      <option value='2024'>2024</option>
      <option value='2025'>2025</option>
      <option value='2026'>2026</option>
      <option value='2027'>2027</option>
      <option value='2028'>2028</option>
      <option value='2029'>2029</option>
      <option value='2030'>2030</option>
      <option value='2031'>2031</option>
    </select>
  )

  let form = <div></div>

  if(props.show) {
    form = (
    <form className='PaymentContainer'>
        <section className='CreditCardContainer'>
          <div className='CreditCardHeader'>
            <input type='radio' name='PaymentOption'/>
            <label className='PaymentLabel'>Credit / Debit Card</label>
          </div>
          <div className='CreditCardFields'>
            <div className='creditCardNumberField'>
              <label>CreditCard Number<span>*</span></label>
              <input type='text' name='creditCardNumber' />
            </div>
            <div className='ExpirationSecurityCodeFields'>
              <div>
                <label>Experation Date<span>*</span></label>
                {months}
              </div>
              <div>
                <label></label>
                {years}
              </div>
              <div>
                <label>Security Code<span>*</span></label>
                <input type='text' name='securityCode'/>
              </div>
            </div>
          </div>
        </section>
        <section className='paypalContainer'>
          <div className='paypalHeader'>
            <input type='radio' name='PaymentOption'/>
            <label className='PaymentLabel'>Paypal</label>
          </div>
          <div className='PaypalFields'>
            <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png" alt="Check out with PayPal" />
          </div>
        </section>
      </form>
    )
  }


  return (
    <React.Fragment>{form}</React.Fragment>
  )


}


export default paymentFields;