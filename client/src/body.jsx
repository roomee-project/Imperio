import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TownHallContainer from './components/townhall/TownHallContainer.jsx';
import MapContainer from './components/MapContainer.jsx';
import ZipForm from './components/ZipForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Chat from './components/Chat.jsx';
import GoogleMap from './components/GoogleMap.jsx';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.renderTownHallContainer = this.renderTownHallContainer.bind(this);
  }
  renderTownHallContainer () {
    return (<TownHallContainer isLoggedIn={this.props.isLoggedIn} />)
  }

  render () {
    return (
  <div className="container-fluid w-100">
    <Switch>
      {/* <Route path="/map" exact component={MapContainer} /> */}
      <Route path="/townhall" exact render={this.renderTownHallContainer} />
      <Route exact path="/" exact component={MapContainer} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/logout" exact component={MapContainer} />
      <Route path="/zipform" exact component={ZipForm} />
      <Route path="/gmap" exact component={GoogleMap} />
    </Switch>
  </div>
    )
  }
}
//<Route exact path="/" component={App} />

export default Body;

