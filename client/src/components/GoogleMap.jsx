import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../../config/map.js';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';


const Pin = ({ text }) => ( 
  <div 
    className=" p-3 mb-2 bg-danger text-white rounded-circle">
      {text}
  </div>
);

class GoogleMap extends React.Component {

  constructor (props) {
    super(props)
    this.state= {

      center: {
        lat: 34.0205319,
        lng: -118.4817919,
      },
      zoom: 11,
      pins: ['2827 S Corning st, los angeles, ca, USA', '2728 s corning st, los angeles, ca, USA']
      //create array to contain list of places returned by voting location api as addresses
        //with this array, create function below to turn into latlng pairs
        //for every element in array, render one Pin component
        //also need api call to populate pins array when component did update is activated
    }
    this.renderPin = this.renderPin.bind(this);
    this.renderPinComponent = this.renderPinComponent.bind(this);
  }

  renderPin (address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.renderPinComponent(latLng);
        
      })
      .catch(error => console.error('Error', error));
    }
    
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.lat !== this.state.center.lat || this.props.lng !== this.state.center.lng) {
      this.setState({
        center: {
          lat: this.props.lat,
          lng: this.props.lng
        }
      })
    }
  }
    
  renderPinComponent (coord) {
    // console.log(coord, 'from pincomp')
    //coords are correct but pin does not drop
    //possibly due to return statement within map method?
    //but even first element of pins does not render
    //do i need a should update component?
    return (
      <Pin
        lat={coord.lat}
        lng={coord.lng}
        text={'A'}  
    />)
  }


  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="jumbotron bg-white" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.MAPKEY }}
          center={this.state.center}
          zoom={this.state.zoom}
        >          
             
        {          
          this.state.pins.length > 0 ?
          this.state.pins.map ( pin =>  
            this.renderPin(pin) 
            )
            :
            <Pin
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text={'Test'}
            />          
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
