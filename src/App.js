import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Topic from './Topic';
import Routes from './Routes';
import SignIn from './SignIn';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import Show from './Show';
import CreateNewContact from './CreateNewContact';

class App extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
            return(
                <Router>
                    <div>
                        <Navbar>
                            <Navbar.Header>
                                <Navbar.Brand>hello there</Navbar.Brand>
                            </Navbar.Header>
                            <Nav>
                                <NavItem>
                                    <Link to="/">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/topics">Topics</Link>
                                </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavDropdown>
                                    <MenuItem><Link to="/signin">Sign in</Link></MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar>
                        

                        {/* <ul>
                            <li>
                                
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topics</Link>
                            </li>
                        </ul> */}
              

                        {/* <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/topics" component={Topics} /> */}


                        {/* //calling the routes component */}
                        <Routes /> 
                    </div>
                </Router>
                )
            }

             
}

// const Home= ()=>
//     (
//         <div>
//             <h2>Home</h2>
//         </div>
//     )


// const About = ()=>
//     (
//         <div>
//             <h2>About</h2>
//         </div>
//     )

// const Topics = ({match})=>
// {   
//     //console.log(match)
//     return(
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to ={`${match.url}/rendering`}>Rendering With React </Link>
//             </li>
//             <li>
//                 <Link to ={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props-v-state</Link>
//             </li>
//         </ul>
//         {/* <Route path={`${match.url}/:topicId`} component={Topic} /> */}
//         <Route exact path={`${match.url}/:topicId`} component={Topic} />
//         <Route exact 
//             path={match.url} 
//             render={()=>
//                 <h3>Please select a topic</h3>
//             }
//         />
//     </div>
//     )
// }

// const Topic = ({match})=> {
//     console.log("match: ", match)
//     return (
//         <div>
//             <h3>{match.params.topicId}</h3>
//         </div>
//     );
// }








export default App;