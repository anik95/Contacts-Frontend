import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {FormGroup, FormControl, ControlLabel, HelpBlock, Label} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import axios from 'axios';
import Show from './Show';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleChangeEmail(e) {
        this.setState({ email: e.target.value });
      }
      handleChangePassword(e) {
          this.setState({password: e.target.value})
      }
      handleSubmit(e) {
          e.preventDefault();

          axios({
              method:'post',
              url: 'http://localhost:8000/api/auth/login',
              headers: {'Content-Type' : 'application/json'},
              data: {
                  email: this.state.email,
                  password: this.state.password
              }
          }).then(response=>{
            localStorage.setItem('Token', response.data.access_token)
            this.props.history.push('/show-contacts');
        }
            // response=>console.log('Bearer' + response.data.access_token)
        );

        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8000/api/auth/login',
        //     headers: {'Content-Type': 'application/json'}  ,
        //     data: {
        //      email:'mustadirmahmood840@gmail.com',
        //      password:'Anik54321'
        //     }
        //   });

        

      }
    

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-signin">
                <FormGroup
                controlId="formBasicText"
                >
                
                <Label>Email: </Label>
                <FormControl
                    type="email"
                    // value={this.state.email}
                    placeholder="Email"
                    onChange={this.handleChangeEmail}
                />
                <Label>Password</Label>
                <FormControl
                    type="password"
                    // value={this.state.value}
                    placeholder="Password"
                    onChange={this.handleChangePassword}
                />
                </FormGroup>
                <input type="submit" value="Submit" />
      </form>
            
        )
    }
}

export default SignIn;