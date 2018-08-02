import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => (
      <nav className="Nav">
        <div className="Nav__container">
        <nav className="navbar position-static navbar-expand-lg navbar-dark bg-primary w-100">
          <ul className="navbar-nav mr-auto align-middle w-100" >
            <li className="col nav-item"><Link to="/" className="navbar-brand">Home</Link></li>
            <li className="col nav-item"><Link to="/townhall" className="nav-link">Town Hall</Link></li>
            {/* <li className="col nav-item"><Link to="/map" className="nav-link">Map</Link></li> */}
            <li className="col nav-item"><Link to="/chat" className="nav-link">Chat</Link></li>
            <li className="col nav-item"><Link to="/zipform" className="nav-link">Local Reps</Link></li>
            <li className="col nav-item"><a href="https://vote.gov/" className= "nav-link" target="_blank">Vote Registration</a></li>
            <li className="col nav-item float-right"><button class="btn btn btn-primary" type="button">{!props.isLoggedIn ? <Link to="/login" className="nav-link">Login</Link>
                : <a href="/logout" className="nav-link">Logout</a> }</button></li>
          </ul>
        </nav>
        </div>
      </nav>
    );

export default Nav;


