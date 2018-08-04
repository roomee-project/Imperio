import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../../config/map.js';

const AnyReactComponent = ({ text }) => ( <div>{text}</div>);

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 38.897,
      lng: -77.037

    },
    zoom: 9
  };

  render() {
    console.log(API_KEY)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '70vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY.MAPKEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={''}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
