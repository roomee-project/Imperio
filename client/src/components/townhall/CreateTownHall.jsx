import React, { Component } from 'react';
import OfficialCreateTownHall from './OfficialCreateTownHall.jsx';
import UserCreateTownHall from './UserCreateTownHall.jsx';
import ViewTownHall from './ViewTownHall.jsx'


export default class CreateTownHall extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType : 'official'
    }
  }

  renderView() {
    console.log('renderview called ')
    if (this.state.userType === 'user') {
      return <UserCreateTownHall />
    } else if (this.state.userType === 'official') {
      return <OfficialCreateTownHall />
    }
  }

  render() {
    return (
      <div className="col-sm">
        <button className="btn btn-light"
          onClick={()=>{this.setState({userType: 'user'})}}>
          Submit as User
        </button>
        <button className="btn btn-light"
          onClick={()=>{this.setState({userType: 'official'})}}>
          Submit as Official
        </button>
        {this.renderView()}

      </div>
    )
  }
}