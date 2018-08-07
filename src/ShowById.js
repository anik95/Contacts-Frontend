import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {Table} from 'react-bootstrap';

class ShowById extends Component{
    constructor(props){
        super(props);
        this.state={
            num:1,
            allContacts: []
        }
    }
    
    componentDidMount(){
        axios({
            method: 'get',
            url: `http://localhost:8000/api/auth/contacts/show/${this.props.match.params.id}`,
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('Token')},
        }).then(response=>{

            this.setState({
                allContacts: response.data
            })

            console.log(response)
        });
    }

    render(){
        console.log(this.state)
        return(
            <div className="show-by-id">
                <h2>Contact Details</h2>
                {this.state.allContacts.length!==0 && 
                (

                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Address Type</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                            
                            {
                                
                                this.state.allContacts.address.map((contactAddress)=>
                                (
                                    <tr>
                                        <td>{this.state.num++}</td>
                                        <td>{contactAddress.address_type}</td>
                                        <td>{contactAddress.address}</td>
                                    </tr>
                                )    
                            )}
                        
                    </tbody>
                </Table>   
                )}                 
            </div>
        )
    }
}
export default ShowById;