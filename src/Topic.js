import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Topic extends Component{
    constructor(props){
        super(props);
        this.state={
                
        }
    }
    render(){
        return(
            <div>
                <h2>{this.props.match.params.topicId}</h2>
            </div>
        )
    }
}
export default Topic;