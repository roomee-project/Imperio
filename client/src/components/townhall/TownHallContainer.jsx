import React, { Component } from 'react';
import CreateTownHall from './CreateTownHall.jsx';
import ViewAllTownHalls from './ViewAllTownHalls.jsx';
import ViewTownHall from './ViewTownHall.jsx'

const TownHallContainer = ({isLoggedIn}) => (
  <div className="container">
    <ViewAllTownHalls />
    <CreateTownHall isLoggedIn={isLoggedIn}/>
  </div>
);

export default TownHallContainer;