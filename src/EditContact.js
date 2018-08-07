import React, {Component} from 'react';
import axios from 'axios';
import {ControlLabel, FormControl, FormGroup, ButtonToolbar, Button } from 'react-bootstrap';


class EditContact extends Component{
  constructor(props){
    super(props);
    this.state = {
      contactName:'',
      contactType:'',
      billingAddress:'',
      shippingAddress:'',
      contact: []
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
      url: `http://localhost:8000/api/auth/contacts/edit/${this.props.match.params.id}`,
      headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ localStorage.getItem('Token')},
      data: {
        name:this.state.contactName,
        type:this.state.contactType,
        billing_address:this.state.billingAddress,
        shipping_address:this.state.shippingAddress
      }
    }).then(this.props.history.push('/show-contacts'));
  }

  componentDidMount(){
    this.fetchContact()
  }
  fetchContact(){
    axios({
      method:'get',
      url: `http://localhost:8000/api/auth/contacts/show/${this.props.match.params.id}`,
      headers: {'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ localStorage.getItem('Token')}
    }).then(response=>{
      this.setState({
        contact: response.data,
        contactName: response.data.name,
        contactType: response.data.type,
        billingAddress: response.data.address[0].address,
        shippingAddress: response.data.address[1].address
      }, ()=>console.log(this.state))
    })
  }

  render(){
    //console.log(this.state.contact)
    return(
      <div className="edit-contact">
          <form onSubmit={this.handleSubmit}>
                  <FormGroup
                  controlId="formBasicText"
                  >
                    <ControlLabel>Contact Name</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.contactName}
                        // placeholder={this.state.contact.name}
                        onChange={this.handleContactName}
                    />
                    <br/>
                    <ControlLabel>Contact Type</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.contactType}
                        // placeholder={this.state.contact.type}
                        onChange={this.handleContactType}
                    />
                    <br/>
                    <ControlLabel>Billing Address</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.billingAddress}
                        // placeholder={this.state.contact.type}
                        onChange={this.handleBillingAddress}
                    />
                    <br/>
                    <ControlLabel>Contact Type</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.shippingAddress}
                        // placeholder={this.state.contact.type}
                        onChange={this.handleShippingAddress}
                    />
                  </FormGroup>
                  <button type="submit">Submit</button>
            
                  
        </form>
      </div>
    )
  }
}
export default EditContact;