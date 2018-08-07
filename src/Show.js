import React, {Component} from 'react';
import axios from 'axios';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ShowById from './ShowById';

const debounce = (fn, delay) => {
  var timer = null;
  return (e) => {
    var context = this, args = arguments;
    var value = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(context, args, value);
    }, delay);
  };
}

class Show extends Component{
    constructor(props){
        super(props);
        this.state = {
            // num: 1,
            allContacts: [],
            searchedContacts: [],
            search: ''
        }
        // this.buttonHandler = this.buttonHandler.bind(this);
        this.handleClick= this.handleClick.bind(this);
        this.searchHandler = debounce(this.searchHandler, 200);
        // this.searchHandler = this.searchHandler.bind(this)
        // this.handleSubmit= this.handleSubmit.bind(this);
        // this.handleChange= this.handleChange.bind(this);
        //this.handleEdit = this.handleEdit.bind(this);
        // this.deleteHandler = this.deleteHandler.bind(this);
        // this.editHandler = this.editHandler.bind(this);
    }
    handleClick(){
      this.props.history.push('/create-new-contact');
    } 

    deleteHandler = (id) => {

      axios({
        method: 'delete',
        url: `http://localhost:8000/api/auth/contacts/delete/${id}`,
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('Token')}
    }).then(() => {
      this.fetchContacts()
    })

    }

    // handleChange(e){
    //   this.setState({
    //     searchedName: e.target.value 
    //   })
    // }

    // handleSubmit(){
    //   this.props.history.push(`/search-contact/${this.state.searchedName}`)
    // }



    componentDidMount(){
        this.fetchContacts()
    }

    fetchContacts() {
      axios({
        method: 'get',
        url: 'http://localhost:8000/api/auth/contacts/show',
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('Token')},

    }).then(response=>{
      //console.log("res: ", response)
      this.setState({
          allContacts: response.data,
          // num:1
      })

    });
    }

    searchHandler = (args, e) => {
      const searchValue = e;
        // if(parseInt(searchValue)){
        //   this.setState({
        //     search: parseInt(searchValue)
        //   },()=>{
        //     axios({
        //       method:'get',
        //       url:'http://localhost:8000/api/auth/contacts/show',
        //       headers:{'Authorization':'Bearer '+ localStorage.getItem('Token')}
        //     }).then(response=>{
        //       this.setState({
        //         allContacts: [response.data[this.state.search-1]]
        //       }, ()=>console.log(this.state.allContacts))
        //     })
        //   })
        // }
      

      // else{
        this.setState({
          search: e
        }, () => {
          axios({
            method:'post',
            url: 'http://localhost:8000/api/auth/contacts/search',
            headers: {'Content-Type' : 'application/json',
                      'Authorization': 'Bearer '+ localStorage.getItem('Token')},
            data: {
              search: this.state.search
            }
          }).then(response=>{
            this.setState({
              allContacts:response.data,
              // num: 1
            }, ()=>console.log('searchedContacts:',this.state.allContacts))
          })
        })
      // }

    }


    render(){
        return(
          <div className="body">
          <form>
            <label>Search: </label>
            <input type="text" placeholder="search here" onChange={this.searchHandler}/>
            
          </form>
            <div>
                {/* <form onSubmit={this.handleSubmit}>
                  Search:<br/>
                  <input type="text" name="name" onChange={this.handleChange}/><br/>
                  <input type="submit" value="Submit"/>
                </form> */}
                <h2>List of Contacts</h2>
                {   
                    this.state.allContacts.length !== 0  && (
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.allContacts.map((contacts, index)=> 
                                    <tr> 
                                        <td>{index + 1}</td>  
                                        <td><Link to={`show-by-id/${contacts.id}`}>{contacts.name}</Link></td>
                                        <td>{contacts.type}</td>
                                        <td><Link to={`edit-contact/${contacts.id}`}>Edit</Link></td>
                                        <td><button onClick={() => this.deleteHandler(contacts.id)}>Delete</button></td>
                                        {/* <td><Link to={`delete/${contacts.id}`}>Delete</Link></td>  */}
                                        {/* <td><button type="button" onClick={contacts.id => console.log("cID: ", contacts.id)} >Delete</button></td> */}
                                    </tr>)
                            }  
                        
                            </tbody>
                        </Table> 
 
                        )  
                                                                                       
                }
                <ButtonToolbar>
                          <Button onClick={this.handleClick}>Create Contact</Button>
                </ButtonToolbar> 
            </div>
          </div>                
        )
    }
}
export default Show;