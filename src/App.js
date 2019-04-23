import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showingInfoWindow: false, //Hides or the shows the infoWindow
        activeMarker: {}, //Shows the active marker upon click
        selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    }; 
    onClose = props => {
      if (this.state.showingInfoWindow) {
          this.setState({
          showingInfoWindow: false,
          activeMarker: null
          });
      }
  };
} 
onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
});
  render() {
    return (
      <div>
        <h1>Hello Google Maps</h1>
        <Map 
          google={this.props.google}
          
          initialCenter={{
            lat: 43.7044,
            lng: -72.2887
          }}
          
          zoom={16}
        > 
        <Marker
            name={'This is a marker we just made yay!'}
            position={{lat: 43.7044, lng: -72.2887}}
            onClick={this.onMarkerClick}
        />
        <InfoWindow>
        <div>
          marker={this.state.activeMarker}
          onClose={this.onClose}
          visible={this.state.showingInfoWindow}
          <h2>{this.state.selectedPlace.name}</h2>
        </div>
        </InfoWindow>
        </Map>

      </div>
    ) 
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBr9Mg2PuSWGAduxp5Wj59C6DMtOZjw_ps'
})(MapContainer);