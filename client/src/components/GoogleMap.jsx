import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../../config/map.js';
 
const AnyReactComponent = ({ text }) => ( <div>{text}</div>);
 
class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
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
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;