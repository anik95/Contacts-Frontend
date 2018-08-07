import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import SignIn from './SignIn';
import Show from './Show';
import ShowById from './ShowById';
import CreateNewContact from './CreateNewContact';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';
// import SearchContact from './SearchContact';

class Routes extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path= "/About" component={About}/>
                <Route path= "/Topics" component={Topics}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/show-contacts" component={Show}/>
                <Route path="/show-by-id/:id" component={ShowById}/>
                <Route path="/create-new-contact" component={CreateNewContact}/>
                <Route path="/delete/:id" component={DeleteContact}/>
                <Route path="/edit-contact/:id" component={EditContact}/>
                {/* <Route path="/search-contact/:name" component={SearchContact}/> */}
            </div>
        )
    }
}
export default Routes;