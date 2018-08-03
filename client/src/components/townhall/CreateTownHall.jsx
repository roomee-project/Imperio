import React, { Component } from 'react';
import OfficialCreateTownHall from './OfficialCreateTownHall.jsx';
import UserCreateTownHall from './UserCreateTownHall.jsx';
import ViewTownHall from './ViewTownHall.jsx';

export default class CreateTownHall extends Component {

  constructor(props){
    super(props);
    this.state = {
      userType : 'user'
    }
    this.allowPosting = this.allowPosting.bind(this);
  }

  renderView() {
    console.log('renderview called ')
    if (this.state.userType === 'user') {
      return <UserCreateTownHall isLoggedIn={this.props.isLoggedIn} />
    } else if (this.state.userType === 'official') {
      return <OfficialCreateTownHall isLoggedIn={this.props.isLoggedIn} />
    }
  }

  allowPosting (string) {
      this.setState({userType: string})
  }

  render() {
    return (
      <div className="col-sm">
        <button className="btn btn-light"
          onClick={()=>{
            this.allowPosting('user')
            }}>
          Submit as User
        </button>
        <button className="btn btn-light"
          onClick={()=>{
            this.allowPosting('official')
          }}>
          Submit as Official
        </button>
        <div className="container jumbotron">
        <div className="row justify-content-center align-items-center">
        <div className="col-7 align-self-center">
        {this.renderView()}
        </div>
        </div>
        </div>

      </div>
    )
  }
}