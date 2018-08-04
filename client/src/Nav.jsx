import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const propTypes = {};
const defaultProps = {};

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: ""
    };
  }
  navZipBoxChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  navZipBoxSubmit() {
    console.log(this.state.zip);
  }

  render() {
    let {isLoggedIn, username} = this.props
    return (
      <React.Fragment>
        <nav className="navbar position-static navbar-expand-lg navbar-dark bg-primary w-100">
        <div className="navbar-nav-item dropdown  navbar-left">
          <a className="btn btn-primary btn-lg dropdown-toggle" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="/townhall">Townhall</a>
            {isLoggedIn ?
              (<a className="dropdown-item" href="/chat">User Chat</a>) :
              (<a className="dropdown-item disabled" href="/login">Uer Chat (login required)</a>)}
            <a className="dropdown-item" href="/zipform">Find representives</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="https://vote.gov/" target="_blank">Register to vote! (offsite link)</a>
          </div>
        </div>
          <a className="navbar-brand btn btn-primary btn-lg mr-auto" href="/">Represent!   {isLoggedIn ? `Welcome, ${username}` : `Welcome.`}</a>
          <Link to="/gmap" className="navbar-nav-link btn btn-primary btn-lg mr-auto">Events Map</Link>
          <Link to="/electioninfo" className="navbar-nav-link btn btn-primary btn-lg mr-auto">Election Info</Link>
            {isLoggedIn ?
              (<a className="navbar-nav-link float-right btn btn-primary btn-lg ml-auto" href="/logout">Log Out</a>) :
              (<a className="navbar-nav-link float-right btn btn-primary btn-lg ml-auto" href="/login">Log in</a>)}
            <form className="navbar-nav-item btn-primary form-inline ml-auto" action="">
              <div className="input-group pr-3">
                <input type="text" className="form-control" placeholder="Zip Code" value={this.state.zip} name="zip"
              onChange={e => this.navZipBoxChange(e)} onSubmit={this.navZipBoxSubmit}/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><i className="fas fa-search" /></button>
                </div>
              </div>
            </form>
        </nav>
      </React.Fragment>
  )};
};
