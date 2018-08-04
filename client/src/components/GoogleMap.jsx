import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../../config/map.js';

const AnyReactComponent = ({ text }) => ( <div>{text}</div>);

class GoogleMap extends React.Component {

  constructor (props) {
    super(props)
    this.state= {

      center: {
        lat: 34.0205319,//recieve these props from ashleigh's api call
        lng: -118.4817919,
      },
      zoom: 11,
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
          <AnyReactComponent

            lat={this.state.center.lat}
            lng={this.state.center.lng}
            text={this.props.address}

          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
