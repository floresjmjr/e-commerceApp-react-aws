import React from 'react';
import './AddressFields.css';

const addressFields = (props) => {

  if(props.billing) {
    var extended = (      
      <div className='BillingShippingSame'>
        <input onClick={props.sameAsBilling} type='checkbox'/>
        <p>Shipping same as billing?</p>
      </div>
    )
  }

  let form = <div></div>;

  if(props.show){
    form = (
      <React.Fragment>
        <ul className='CheckoutFields'>
          <li className='CheckoutName'>
            <div className='FirstNameField'>
              <label>First Name</label>
              <input onChange={props.updateFormData} name='firstName' type='text' 
              value={props.formData.firstName}/>
            </div>
            <div className='SecondNameField'>
              <label>Last Name</label>
              <input onChange={props.updateFormData} name='lastName' type='text' 
              value={props.formData.lastName}/>
            </div>
          </li>
          <li className='CheckoutStreetAddress'>
            <label>Street Address</label>
            <input onChange={props.updateFormData} name='firstAddress' type='text'
              value={props.formData.firstAddress}/>
          </li>
          <li className='CheckoutStreetAddress'>
            <label>Street Address 2 <span>(Optional)</span></label>
            <input onChange={props.updateFormData} name='secondAddress' type='text'
              value={props.formData.secondAddress}/>
          </li>
          <li className='CheckoutZipCityState'>
            <div className='Zip'>
              <label>Zip Code</label>
              <input onChange={props.updateFormData} name='zip' type='text'
                value={props.formData.zip}/>
            </div>
            <div className='City'>
              <label>City</label>
              <input onChange={props.updateFormData} name='city' type='text'
                value={props.formData.city}/>
            </div>
            <div className='State'>
              <label>State</label>
              <input onChange={props.updateFormData} name='state' type='text'
                value={props.formData.state}/>
            </div>
          </li>
        </ul>
        {extended}
      </React.Fragment>
    )
  }


  return (
    <React.Fragment>{form}</React.Fragment>
  )
}


export default addressFields;