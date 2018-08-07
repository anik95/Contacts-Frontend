import React, {Component} from 'react';
import {BrowserRouter, Link , Route} from 'react-router-dom';
import Topic from './Topic';

class Topics extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h2>Topics</h2>

                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/rendering`}>Rendering with React </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/components`}>Components </Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/props-v-vomponents`}>Props-v-state</Link>
                    </li>
                </ul>

                <Route path={`${this.props.match.url}/:topicId`} component={Topic} />
                <Route 
                    exact
                    path={`${this.props.match.url}`} render={()=>(<h3>Please select a topic</h3>)}
                /> 



                
                

            </div>
        )
    }

}
export default Topics;