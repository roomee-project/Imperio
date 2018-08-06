import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import './Map.css';
import axios from 'axios';
import ListView from './ListView.jsx';
import colorHelper from './colorHelper.js'

{/* <div>
  This is the MapContainer Component. Enter a title here.
          <ul>
    User Stories
            <li>When I click a state, I see the representatives for that state</li>
    <li>When I hover over a state, I see the color red/blue according to their reps</li>
    <li></li>
  </ul>
</div> */}


/**
 Known bugs: Georgia doesn't work
*/

export default class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedState: '',
      data: '',
    }
  }

  //maybe put this into the constructor?
  //these are the native components for the svg map
  mapDimensions() {
    return {
      height: 593,
      width: 959,
    }
  }

  mapHandler = (event) => {
    console.log('event.target.dataset.name is', event.target.dataset.name);
    const stateClicked = event.target.dataset.name;
    // this.setState({selectedState: event.target.dataset.name})

    axios.post('/reps', {
      location: event.target.dataset.name,
      region: 'state'
    })
    .then(response => {
      if (typeof(response.data) === 'String') {
        // what case does this handle? the else block is getting called when a user clicks on a state
        // this is likely called when a user enters in their zipCode to search
        console.log(response.data);
      } else {
        this.setState({
          selectedState: stateClicked,
          data: response.data
        });
      }
    })
  };

  render() {
    console.log('render called')
    return (
      <div className="container-fluid text-center">
        <div>
          {this.state.selectedState ? <h1>Selected: {this.state.selectedState}</h1> : <h1>Select A State!</h1>}

        </div>
        <div className="row mx-auto w-100" id="nav-usa" >
        <ul className="list-group">
          <li className="list-group-item" href="#reps">
          <a href="#reps">
          <USAMap
            onClick={this.mapHandler}
            title={"Choose your state"}
            width={this.mapDimensions().width *1.2}
            height={this.mapDimensions().height *1.2}
            customize={{[this.state.selectedState]: {fill: colorHelper(this.state.data)}}}
          />
          </a>
          </li>
          </ul>
        </div>
        <ListView data={this.state.data}/>
      </div>
    )
  }
}
