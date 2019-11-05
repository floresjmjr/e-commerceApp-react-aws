import React from 'react';
import './AddressFields.css';
import State from './State/State.js'


const addressFields = (props) => {


  const updateValue = (event) =>{
    let value = event.target.value;
    let name = event.target.name;
    let formField = {}
    formField.value = value;
    formField.valid = validateInput(value, name);
    props.updateCheckoutForm(props.form, formField, name)
  }

  const validateInput = (value, name) =>{
    let result;
    switch(name) {
      case 'zip':
        result = validateZip(value)
        break 
      case 'firstName':
        result = validateName(value)
        break
      case 'lastName':
        result = validateName(value)
        break
      case 'firstAddress':
        result = validateName(value)        
        break
      case 'secondAddress':
        result = validateName(value)
        break
      case 'city':
        result = validateName(value)
        break
      case 'state':
        result = validateState(value)
        break
      default: 
        result = true;
    }
    return result;
  }

  const validateZip = (value) => {
    if(value.match(/\d/g)) {
      return value.match(/\d/g).length === 5;
    } else {
      return false;
    }
  }

  const validateName = (value) => {
    if(value.match(/[a-zA-Z]/g)){
      return value.match(/[a-zA-Z]/g).length >= 3
    } else {
      return false;
    }
  }

  const validateState = (value) => {
    if(value.match(/[a-zA-Z]/g)){
      return value.match(/[a-zA-Z]/g).length === 2    
    } else {
      return false;
    }
  }

  const validateField = (event) =>{
    const name = event.target.name
    const value = event.target.value
    if(validateInput(value, name)) {
      event.target.parentElement.classList.remove('InvalidInput')
      props.updateFieldClass(props.form, '', name)
    } else {
      if(name === 'secondAddress'){
      } else {
        event.target.parentElement.classList.add('InvalidInput')
        props.updateFieldClass(props.form, 'InvalidInput', name)
      }
    }
  }


  if(props.form === 'billingFormData') {
    var extended = (      
      <div className='BillingShippingSame'>
        <input onChange={props.sameAsBilling} 
          checked={props.sameAsBillingValue} type='checkbox'/>
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
            <div className={`FirstNameField ${props.formValues.firstName.className}`}>
              <label>First Name</label>
              <input onChange={updateValue} name='firstName' type='text' 
                value={props.formValues.firstName.value} onBlur={validateField}/>
            </div>
            <div className={`SecondNameField ${props.formValues.lastName.className}`}>
              <label>Last Name</label>
              <input onChange={updateValue} name='lastName' type='text' 
                value={props.formValues.lastName.value} onBlur={validateField}/>
            </div>
          </li>
          <li className={`CheckoutStreetAddress ${props.formValues.firstAddress.className}`}>
            <label>Street Address</label>
            <input onChange={updateValue} name='firstAddress' type='text'
              value={props.formValues.firstAddress.value} onBlur={validateField}/>
          </li>
          <li className={`CheckoutStreetAddress ${props.formValues.secondAddress.className}`}>
            <label>Street Address 2 <span>(Optional)</span></label>
            <input onChange={updateValue} name='secondAddress' type='text'
              value={props.formValues.secondAddress.value} onBlur={validateField}/>
          </li>
          <li className='CheckoutZipCityState'>
            <div className={`Zip ${props.formValues.zip.className}`}>
              <label>Zip Code</label>
              <input onChange={updateValue} name='zip' type='text'
                value={props.formValues.zip.value} onBlur={validateField}/>
            </div>
            <div className={`City ${props.formValues.city.className}`}>
              <label>City</label>
              <input onChange={updateValue} name='city' type='text'
                value={props.formValues.city.value} onBlur={validateField}/>
            </div>
            <div className='State'>
              <label>State</label>
              <State value={props.formValues.state.value} updateValue={updateValue}/>
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