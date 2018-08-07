import React, {Component} from 'react';
import axios from 'axios';

class DeleteContact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
      axios({
        method: 'delete',
        url: `http://localhost:8000/api/auth/contacts/delete/${this.props.match.params.id}`,
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('Token')},

    }).then(this.props.history.push('/show-contacts'));

        
    }

    render(){
        return(
            <div> 
                
            </div>
        )
    }
}

export default DeleteContact;