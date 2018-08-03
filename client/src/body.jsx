import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TownHallContainer from './components/townhall/TownHallContainer.jsx';
import MapContainer from './components/MapContainer.jsx';
import ZipForm from './components/ZipForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import Chat from './components/Chat.jsx';

const Body = (props) => (
    <div className="container-fluid w-100">
      <Switch>
        {/* <Route path="/map" exact component={MapContainer} /> */}
        <Route path="/townhall" exact component={TownHallContainer} />
        <Route path="/" exact component={MapContainer} />
        <Route path="/login" exact component={LoginForm} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/logout" exact component={MapContainer} />
        <Route path="/zipform" exact component={ZipForm} />
      </Switch>
    </div>
)
//<Route exact path="/" component={App} />

export default Body;

