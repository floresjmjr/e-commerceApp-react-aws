import React, { Component } from 'react'
import './CheckoutForm.css'
import AddressFields from './AddressFields/AddressFields';
import PaymentFields from './PaymentFields/PaymentFields';

class CheckoutForm extends Component {
  
  state = {
    showBilling: true,
    showShipping: false,
    showPayment: false,
    payment: false,
    sameAsBilling: false,
    shipping: {},
    billing: {},
  }


  toggleFormFields = (type) =>{
    let obj = {};
    obj[type] = !this.state[type]
    this.setState(obj)
  }

  updateBillingData = (event) =>{
    this.updateFormData('billing', event)
  }

  updateShippingData = (event) =>{
    this.updateFormData('shipping', event)
  }

  updateFormData = (type, event) =>{
    let data = {...this.state[type]}
    data[event.target.name] = event.target.value;
    // console.log('data', data)
    const state = {};
    state[type] = data;
    this.setState(state, ()=>{
      // console.log(state);
    })
  }

  sameAsBilling = () => {
    this.setState({sameAsBilling: !this.state.sameAsBilling}, ()=>{
      if(this.state.sameAsBilling){
        let billing = {...this.state.billing}
        console.log('billing', billing);
        this.setState({shipping: billing}) 
      } else {
        this.setState({shipping: {}})
      }
    })
  }

  render() {
  
    return (
      <section className='CheckoutForm'>
        <section className='IdentifyCustomer'>
          <h4>Customer</h4><p>Returning customer? Login!</p>
        </section>
        <section className='Billing'>
          <h4 onClick={() => this.toggleFormFields('showBilling')}>Billing</h4>
          <AddressFields 
            updateFormData={this.updateBillingData} 
            show={this.state.showBilling}
            formData={this.state.billing}
            billing={true}
            sameAsBilling={this.sameAsBilling}/>
        </section>
        <section className='Shipping'>
          <h4 onClick={() => this.toggleFormFields('showShipping')}>Shipping</h4>
          <AddressFields 
            updateFormData={this.updateShippingData} 
            show={this.state.showShipping}
            formData={this.state.shipping}/>
        </section>
        <section className='Payment'>
          <h4 onClick={() => this.toggleFormFields('showPayment')}>Payment</h4>
          <PaymentFields 
            show={this.state.showPayment}/>
        </section>
      </section>
    )
  }
}


export default CheckoutForm;