import React from 'react';
import PlacesAutocomplete, {geocodeByAddress,geocodeByPlaceId,getLatLng} from 'react-places-autocomplete';
import GoogleMap from './GoogleMap.jsx';

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      lat: '',
      lng: ''
   };
  }
 
  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          lat : latLng.lat,
          lng : latLng.lng
        })
      })
      .catch(error => console.error('Error', error));

      // console.log(this.state.lat, this.state.lng)
  };
 
  render() {
    return (
      <div className="jumbotron bg-white">
      
      <div className="float-left overlap row justify-content-center align-items-center zindex-dropdown" >
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
       className="algolia-autocomplete bd-search d-flex"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input form-control ds-input',
              })}
            />
            <div className="autocomplete-dropdown-container ds-dropdown-menu zindex-dropdown">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'dropdown-item bg-light text-dark'//'suggestion-item--active'
                  : 'dropdown-item text-secondary';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
      
      <GoogleMap lat={this.state.lat} lng={this.state.lng} address={this.state.address} />
      </div>
    );
  }
}