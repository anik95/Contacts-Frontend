import React, {Component} from 'react';
import axios from 'axios';
import {ControlLabel, FormControl, FormGroup, ButtonToolbar, Button } from 'react-bootstrap';


class CreateNewContact extends Component{
  constructor(props){
    super(props);
    this.state = {
      contactName:'',
      contactType:'',
      billingAddress:'',
      shippingAddress:''

    }
    this.handleContactName = this.handleContactName.bind(this);
    this.handleContactType = this.handleContactType.bind(this);
    this.handleBillingAddress = this.handleBillingAddress.bind(this);
    this.handleShippingAddress = this.handleShippingAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleContactName(e){
    this.setState({
      contactName: e.target.value
    })
  }
  handleContactType(e){
    this.setState({
      contactType: e.target.value
    })  
  } 
  handleShippingAddress(e){
    this.setState({
      shippingAddress: e.target.value
    })
  }
  handleBillingAddress(e){
    this.setState({
      billingAddress: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/auth/contacts/create',
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('Token')},
      data: {
        name:this.state.contactName,
        type:this.state.contactType,
        billing_address:this.state.billingAddress,
        shipping_address:this.state.shippingAddress
      }
    }).then(this.props.history.push('show-contacts'))
  }

  render(){
    return(
      <div className="Create-Contact">
          <form onSubmit={this.handleSubmit}>
                  <FormGroup
                  controlId="formBasicText"
                  >
                    <ControlLabel>Contact Name</ControlLabel>
                    <FormControl
                        type="text"
                        // value={this.state.email}
                        placeholder="contact name"
                        onChange={this.handleContactName}
                    />
                    <br/>
                    <ControlLabel>Contact Type</ControlLabel>
                    <FormControl
                        type="text"
                        // value={this.state.value}
                        placeholder="contact type"
                        onChange={this.handleContactType}
                    />
                    <br/>
                    <ControlLabel>Billing Address</ControlLabel>
                    <FormControl
                        type="text"
                        // value={this.state.value}
                        placeholder="billing address"
                        onChange={this.handleBillingAddress}
                    />
                    <br/>
                    <ControlLabel>Shipping Address</ControlLabel>
                    <FormControl
                        type="text"
                        // value={this.state.value}
                        placeholder="shipping address"
                        onChange={this.handleShippingAddress}
                    />
                  </FormGroup>
                  <button type="submit">Submit</button>
            
                  
        </form>
      </div>
    )
  }
}
export default CreateNewContact;