import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../../config/map.js';

const Pin = ({ text }) => ( <div >{text}</div>);

class GoogleMap extends React.Component {

  constructor (props) {
    super(props)
    this.state= {

      center: {
        lat: 34.0205319,
        lng: -118.4817919,
      },
      zoom: 11,
      //create array to contain list of places returned by voting location api as addresses
        //with this array, create function below to turn into latlng pairs
        //for every element in array, render one Pin component
    }
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
 

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.MAPKEY }}
          center={this.state.center}
          zoom={this.state.zoom}
        >
          <Pin

            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={'A'}

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
