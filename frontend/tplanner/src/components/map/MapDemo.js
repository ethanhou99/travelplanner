/* global google */
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";


const mapStyles = {
    marginRight: '20px',
    width: '100%',
    height: '100%',
};


class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleMapReady = this.handleMapReady.bind(this);
    }

    handleMapReady(mapProps, map) {
        this.calculateAndDisplayRoute(map);
    }

    calculateAndDisplayRoute(map) {
        const directionsService = new google.maps.DirectionsService();
        // const directionsDisplay = new google.maps.DirectionsRenderer();
        // directionsDisplay.setMap(map);


        const waypoints = this.props.data.map(item =>{
            return{
                location: {lat: item.lat, lng:item.lng},
                stopover: true
            }
        })
        const origin = waypoints.shift().location;
        const destination = waypoints.pop().location;

        const renderDirections = (result) => {
            const directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(map);
            directionsDisplay.setDirections(result);
        };

        const requestDirections = (waypts) => {
            const waypoints = waypts.map(item =>{
                return{
                    location: {lat: item.lat, lng:item.lng},
                    stopover: true
                }
            });
            const origin = waypoints.shift().location;
            const destination = waypoints.pop().location;
            directionsService.route({
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                travelMode: 'DRIVING'
            }, function(result) {
                renderDirections(result);
            });
        };


        requestDirections([{
                lat: 37.785845,
                lng: -122.400965
            },
            {
                lat: 37.777292,
                lng: -122.43261
            },
            {
                lat: 37.7907819,
                lng: -122.4371586
            }]);
        requestDirections([{
                lat: 37.79292,
                lng: -122.49
            },
            {
                lat: 37.8081269,
                lng: -122.4253858
            }]);
    }

    render() {
        return (
            <div className="map-container">
                <Map
                    style={mapStyles}
                    google={this.props.google}
                    className={"map"}
                    zoom={this.props.zoom}
                    initialCenter={this.props.center}
                    onReady={this.handleMapReady}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAZUlXlIHJwVh45kjVVK7NSyeGs13S3QhQ",
    libraries: []
})(MapContainer);
