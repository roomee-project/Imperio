import React, { Component } from 'react';
import axios from 'axios';

export default class OfficialCreateTownHall extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      title: ''
    }
  }

  //TODO:
  //Front-end :Send data to the server.
  //Server: store data into the database.

  handleClick(e) {
    e.preventDefault()
    console.log('handleClick called!')
    this.sendTownHall(this.state.title, 'timeplaceholder');
  }

  sendTownHall(title, time) {
    console.log('send town hall called')
    const data = {
      townHallName: title,
      closesAt: time,
    };
    axios.post('/create', data)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="jumbotron rounded">
        <form>
          <fieldset>
            <h4>Reach out to the people in your community.</h4>
            <div className="input-group input-group-sm mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Title </span>
              </div>
              
              <input 
              className="rounded form-control"
              placeholder="Title"
              aria-label="Username" 
              aria-describedby="basic-addon1"
              value="Title"
              name="title"
              type="text"
              value={this.state.title}
              onChange={e => this.handleChange(e)}/><br />
            </div>
            <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">  
            <span className="input-group-text" id="basic-addon1" >Email </span>
            </div>
            
             <input 
                type="text"   
                className="rounded form-control"
                placeholder="official@email.com"
                aria-label="email" 
                aria-describedby="basic-addon1"
                /><br />
             </div>
             <div className="input-group mb-3 input-group-sm">
             <div className="input-group-prepend">
             <span className="input-group-text" id="basic-addon1">Open Until </span>
             </div>
            <input 
            aria-describedby="basic-addon1"
            className="rounded form-control" 
            type="datetime-local" />
           </div>
            <button className="btn btn-light"
              onClick={this.handleClick}>
              Create Town Hall
            </button>
          </fieldset>
        </form>
      </div>
    )
  }
}
