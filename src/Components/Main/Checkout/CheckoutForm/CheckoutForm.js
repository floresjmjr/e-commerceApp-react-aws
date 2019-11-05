import React, { Component } from 'react'
import './CheckoutForm.css'
import AddressFields from './AddressFields/AddressFields';
import PaymentFields from './PaymentFields/PaymentFields';

class CheckoutForm extends Component {
  
  state = {
    show: {
      billing: false,
      shipping: false,
      payment: false,
      customer: true,
    },
    shippingFormData: {
      firstName: {value: '', valid: false, className: ''},
      lastName: {value: '', valid: false, className: ''},
      firstAddress: {value: '', valid: false, className: ''},
      secondAddress: {value: '', valid: false, className: ''},
      zip: {value: '', valid: false, className: ''},
      city: {value: '', valid: false, className: ''},
      state: {value: '', valid: false, className: ''},
    },
    billingFormData: {
      firstName: {value: '', valid: false, className: ''},
      lastName: {value: '', valid: false, className: ''},
      firstAddress: {value: '', valid: false, className: ''},
      secondAddress: {value: '', valid: false, className: ''},
      zip: {value: '', valid: false, className: ''},
      city: {value: '', valid: false, className: ''},
      state: {value: '', valid: false, className: ''},
    },
    email: {value: '', valid: false},
    sameAsBilling: false,
  }

  toggleFormFields = (type) =>{
    let obj = {};
    obj['show'] = {}
    obj.show[type] = !this.state.show[type]
    this.setState(obj)
  }

  updateEmailHandler = (event) => {
    this.setState({email: {value: event.target.value}})
  }

  emailSubFormHandler = (event) => {
    event.preventDefault();
    if(this.validateEmail(event)){
      let show = {...this.state.show}
      show['customer'] = false;
      show['billing'] = true;
      this.setState({show: show})
    } else {
      alert('Please provide a valid email');
    }
  }

  validateEmail = (event)=> {
    if(this.state.email.value.match(/\S+@\S+\.\S+/)){
      let email = {...this.state.email}
      email['valid'] = true;
      email['className'] = '';
      this.setState({email: email})
      event.target.parentElement.classList.remove('InvalidInput')
      return true;
    } else {
      let email = {...this.state.email}
      email['valid'] = false;
      email['className'] = 'InvalidInput';
      this.setState({email: email})      
      event.target.parentElement.classList.add('InvalidInput')
      return false;
    }
  }

  sameAsBilling = () => {
    this.setState({sameAsBilling: !this.state.sameAsBilling})
  }

  updateCheckoutForm = (form, values, name) =>{
    let formData = {}
    let updatedFormData = {...this.state[form]}
    updatedFormData[name] = values
    formData[form] = updatedFormData;
    this.setState(formData)
  }

  updateFieldClass = (form, value, name) =>{
    let container = {}
    let formData = {...this.state[form]}
    formData[name]['className'] = value;
    container[form] = formData;
    this.setState(container)
  }

  render() {

    console.log('same', this.state.billingFormData.firstName)

    let emailSection = <React.Fragment></React.Fragment>

    if(this.state.show.customer) {
      emailSection = (
        <form onSubmit={this.emailSubFormHandler} className={`IdentifyCustomerForm ${this.state.email.className}`}>
          <label>Email</label>
          <input name='email' value={this.state.email.value} 
            type='email' onChange={this.updateEmailHandler} onBlur={this.validateEmail}/>
        </form>
      )
    }

    let formData = this.state.shippingFormData;

    if(this.state.sameAsBilling) {
      formData = this.state.billingFormData;
    }
  
    let customerSection = <p>Returning customer? Login!</p>
  
    if(this.state.email.value && this.state.email.valid) {
      customerSection = <p>{this.state.email.value}</p>;
    } 

    return (
      <section className='CheckoutForm'>
        <section>
          <div className='IdentifyCustomer' onClick={() => this.toggleFormFields('customer')}>
            <h4>Customer</h4>
            {customerSection}
          </div>
          {emailSection}
        </section>
        <section className='Billing'>
          <h4 onClick={() => this.toggleFormFields('billing')}>Billing</h4>
          <AddressFields 
            show={this.state.show.billing}
            form={'billingFormData'}
            formValues={this.state.billingFormData}
            updateCheckoutForm={this.updateCheckoutForm}
            sameAsBillingValue={this.state.sameAsBilling}
            updateFieldClass={this.updateFieldClass}
            sameAsBilling={this.sameAsBilling}/>
        </section>
        <section className='Shipping'>
          <h4 onClick={() => this.toggleFormFields('shipping')}>Shipping</h4>
          <AddressFields
            show={this.state.show.shipping}
            form={'shippingFormData'}
            formValues={formData}
            updateFieldClass={this.updateFieldClass}
            updateCheckoutForm={this.updateCheckoutForm}/>
        </section>
        <section className='Payment'>
          <h4 onClick={() => this.toggleFormFields('payment')}>Payment</h4>
          <PaymentFields
            show={this.state.show.payment}
            // formValues={true}
            updateCheckoutForm={this.updateCheckoutForm}/> 
        </section>
      </section>
    )
  }
}


export default CheckoutForm;