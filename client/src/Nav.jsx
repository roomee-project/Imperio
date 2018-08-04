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
    this.navZipBoxChange = this.navZipBoxChange.bind(this);
    this.navZipBoxSubmit = this.navZipBoxSubmit.bind(this)
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
          <a className="btn btn-primary btn-lg dropdown-toggle pr-0 pl-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bars" />
          </a>
          <div className="dropdown-menu">
            <Link to="/zipform" className="navbar-nav-link dropdown-item">Find representives</Link>
            <Link to="/townhall" className="navbar-nav-link dropdown-item">Townhall</Link>
            {isLoggedIn ?
              (<Link to="/chat" className="navbar-nav-link dropdown-item">User Chat</Link>) :
              (<Link to="/login" className="navbar-nav-link dropdown-item disabled">User Chat (Login Required)</Link>)}
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="https://vote.gov/" target="_blank">Register to vote! (offsite link)</a>
          </div>
        </div>
          <a className="navbar-brand btn btn-primary btn-lg mr-auto pl-02" href="/">Represent!</a>
          <Link to="/gmap" className="navbar-nav-link btn btn-primary btn-lg mr-auto">Events Map</Link>
          <Link to="/electioninfo" className="navbar-nav-link btn btn-primary btn-lg mr-auto">Election Info</Link>
            {isLoggedIn ?
              (<a className="navbar-nav-link float-right btn btn-primary btn-lg ml-auto" href="/logout">Log Out</a>) :
              (<a className="navbar-nav-link float-right btn btn-primary btn-lg ml-auto" href="/login">Log in</a>)}
            <form className="navbar-nav-item btn-primary form-inline ml-auto" action="" target="">
              <div className="input-group pr-3">
                <input type="text" className="form-control" placeholder="Zip Code" value={this.state.zip} name="zip"
              onChange={e => this.navZipBoxChange(e)}/>
                <div className="input-group-btn">
                  <button className="btn btn-default" type="button" onClick={this.navZipBoxSubmit}><i className="fas fa-search" /></button>
                </div>
              </div>
            </form>
        </nav>
      </React.Fragment>
  )};
};
