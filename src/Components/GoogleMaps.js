import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

class GoogleMaps extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                }}
            />                       
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBW7RC8NVswou5NBPR-skYK4pUbtUf0pD0'
})(GoogleMaps);
