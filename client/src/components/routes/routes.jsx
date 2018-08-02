import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TownHallContainer from '../townhall/TownHallContainer.jsx';
import MapContainer from '../MapContainer.jsx';
import ZipForm from '../ZipForm.jsx';
import LoginForm from '../LoginForm.jsx';
import Chat from '../Chat.jsx';

const Routes = (props) => (
  <Router>
    <div >
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

    <Switch>
      <div className="container-fluid w-100">
        {/* <Route path="/map" exact component={MapContainer} /> */}
        <Route path="/townhall" exact component={TownHallContainer} />
        <Route path="/" exact component={MapContainer} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/logout" exact component={MapContainer} />
        <Route path="/zipform" exact component={ZipForm} />
      </div>
    </Switch>

    </div>
  </Router>

 //<Route path="/vote" exact component={() => window.open("https://vote.gov/","_blank")}/>
)
//<Route exact path="/" component={App} />

export default Routes;

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <ul className="navbar-nav mr-auto">
    <li><Link to={'/'} className="nav-link"> Home </Link></li>
    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
    <li><Link to={'/about'} className="nav-link">About</Link></li>
    <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
  </ul>
</nav> */}
