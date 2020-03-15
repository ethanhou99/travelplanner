import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import PlaceList from './PlaceList';
import User from './User'
import {Row, Container} from 'reactstrap';
import { Grid } from '@material-ui/core';


const mapStyles = {
    width: '100%',
    height: '100%',
};

class SimpleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            place_list:[
                    {
                        "placeId": 1,
                        "latitude": 37.785845,
                        "longitude": -122.400965,
                        "duration": 1.5,
                        "placeName": "San Francisco Museum of Modern Art",
                        "placeInformation": "Contemporary & modern paintings, installations, photographs, media & more in a sleek space.",
                        "openTime": "10AM - 5PM",
                        "address": "151 3rd St, San Francisco, CA 94103",
                        "rating": 5.0,
                        "imageURL": "https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg"
                    },
                    {
                        "placeId": 2,
                        "latitude": 37.777292,
                        "longitude": -122.43261,
                        "duration": 1.0,
                        "placeName": "The Painted Ladies",
                        "placeInformation": "Historical row of Victorian houses well-known for appearances on movies, TV shows & postcards.",
                        "openTime": "5AM - 12AM",
                        "address": "Steiner St &, Hayes St, San Francisco, CA 94117",
                        "rating": 4.0,
                        "imageURL": "https://d3qvqlc701gzhm.cloudfront.net/thumbs/b0a762501eab02f8955153c20a54b3e5078bfd1c9418dde96e623bbbcd82312e-750.jpg"
                    },
                    {
                        "placeId": 3,
                        "latitude": 37.808672,
                        "longitude": -122.409764,
                        "duration": 1.0,
                        "placeName": "PIER 39",
                        "placeInformation": "Bustling bayside pier featuring scenic views, sea-lion sightings, eateries, shops & entertainment.",
                        "openTime": "10AM - 9PM",
                        "address": "The Embarcadero, San Francisco, CA 94133",
                        "rating": 3.0,
                        "imageURL": "https://www.californiabeaches.com/wp-content/uploads/2016/06/pier-39-fishermans-wharf-san-francisco-1-1000x518.jpg"
                    },
                    {
                        "placeId": 4,
                        "latitude": 37.771322,
                        "longitude": -122.469589,
                        "duration": 2.0,
                        "placeName": "Japanese Tea Garden",
                        "placeInformation": "Popular gardens with a Japanese teahouse & narrow paths winding past koi ponds, pagodas & a bridge.",
                        "openTime": "9AM - 5PM",
                        "address": "75 Hagiwara Tea Garden Dr, San Francisco, CA 94118",
                        "rating": 5.0,
                        "imageURL": "https://25va3qc1hw-flywheel.netdna-ssl.com/wp-content/uploads/2011/03/Japanese-Tea-Garden-1280x640.jpg"
                    },
                    {
                        "placeId": 5,
                        "latitude": 37.801482,
                        "longitude": -122.458545,
                        "duration": 2.0,
                        "placeName": "The Walt Disney Family Museum",
                        "placeInformation": "Presidio museum exploring the life of Walt Disney featuring hands-on exhibits & original artwork.",
                        "openTime": "10AM - 6PM",
                        "address": "104 Montgomery St, San Francisco, CA 94129",
                        "rating": 4.0,
                        "imageURL": "https://img.grouponcdn.com/deal/omNXMX4PEjmeP7qmJHGg/j2-2048x1229/v1/c700x420.jpg"
                    },
                    {
                        "placeId": 6,
                        "latitude": 37.787054,
                        "longitude": -122.405162,
                        "duration": 1.0,
                        "placeName": "Museum Of Ice Cream San Francisco",
                        "placeInformation": "MOIC San Francisco features imaginative, multi-sensory installations.",
                        "openTime": "10:30AM - 5PM",
                        "address": "1 Grant Ave, San Francisco, CA 94108",
                        "rating": 3.0,
                        "imageURL": "https://media.timeout.com/images/105576649/630/472/image.jpg"
                    },
                    {
                        "placeId": 7,
                        "latitude": 37.73524,
                        "longitude": -122.503226,
                        "duration": 2.0,
                        "placeName": "San Francisco Zoo",
                        "placeInformation": "Families come for the nearly 1,000 animals, kids' zoo, steam train, carousel & special exhibits.",
                        "openTime": "10AM - 5PM",
                        "address": "Sloat Blvd &, Great Hwy, San Francisco, CA 94132",
                        "rating": 4.0,
                        "imageURL": "https://www.californiabeaches.com/wp-content/uploads/2016/05/san-francisco-zoo-650x450.jpg"
                    },
                    {
                        "placeId": 8,
                        "latitude": 37.790951,
                        "longitude": -122.4057,
                        "duration": 0.5,
                        "placeName": "Dragon's Gate",
                        "placeInformation": "Landmark gateway arch marking the entrance to the city's iconic Chinatown neighborhood.",
                        "openTime": "All Day",
                        "address": "Bush St, Grant Ave, San Francisco, CA 94108",
                        "rating": 5.0,
                        "imageURL": "https://live.staticflickr.com/8601/16600105831_ed350f213b_b.jpg"
                    },
                    {
                        "placeId": 9,
                        "latitude": 37.820166,
                        "longitude": -122.478244,
                        "duration": 1.0,
                        "placeName": "Golden Gate Bridge",
                        "placeInformation": "Famed 4,200-ft. art deco suspension bridge open to car, bike & foot traffic.",
                        "openTime": "All Day",
                        "address": "Golden Gate Bridge, San Francisco, CA, USA",
                        "rating": 4.0,
                        "imageURL": "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg"
                    },
                    {
                        "placeId": 10,
                        "latitude": 37.8009851,
                        "longitude": -122.4267626,
                        "duration": 1.5,
                        "placeName": "Lombard Street",
                        "placeInformation": "On a 27-degree angle, this famously crooked street features 8 hairpin turns & landscaped flowerbeds.",
                        "openTime": "All Day",
                        "address": "Lombard Street, San Francisco, Califonia",
                        "rating": 3.0,
                        "imageURL": "https://www.californiabeaches.com/wp-content/uploads/2016/07/ed902e493bec5d8605114f584e2a39fb-421x700.jpg"
                    },
                    {
                        "placeId": 11,
                        "latitude": 37.752181,
                        "longitude": -122.447585,
                        "duration": 2.0,
                        "placeName": "Twin Peaks",
                        "placeInformation": "Renowned, 180-degree views of the Bay Area are offered at this 64-acre park with hiking trails.",
                        "openTime": "5AM - 9PM",
                        "address": "501 Twin Peaks Blvd, San Francisco, CA",
                        "rating": 3.0,
                        "imageURL": "https://www.californiabeaches.com/wp-content/uploads/2016/07/54459bbfe4b033480030d521_pm9-e1519785462502.jpg"
                    },
                    {
                        "placeId": 12,
                        "latitude": 37.771689,
                        "longitude": -122.468708,
                        "duration": 2.0,
                        "placeName": "De Young Museum",
                        "placeInformation": "A diverse collection of fine arts in a building with a dramatic copper facade in Golden Gate Park.",
                        "openTime": "9:30AM - 5PM",
                        "address": "50 Hagiwara Tea Garden Dr, San Francisco, CA",
                        "rating": 5.0,
                        "imageURL": "https://www.famsf.org/sites/all/themes/refresh/new_famsf_core/images/FAMSF-DY-image.jpg"
                    },
                    {
                        "placeId": 13,
                        "latitude": 37.802049,
                        "longitude": -122.448602,
                        "duration": 2.0,
                        "placeName": "Palace of Fine Arts",
                        "placeInformation": "This Greco-Roman palace & architectural attraction hosts an ever-changing roster of performing arts.",
                        "openTime": "10AM - 6PM",
                        "address": "3601 Lyon St, San Francisco, CA",
                        "rating": 5.0,
                        "imageURL": "https://img.theculturetrip.com/768x432/wp-content/uploads/2015/11/PHOTO-4_THE-TURBULENT-HISTORY-OF-THE-PALACE-OF-FINE-ARTS-1.jpg"
                    },
                    {
                        "placeId": 14,
                        "latitude": 37.770009,
                        "longitude": -122.466062,
                        "duration": 3.0,
                        "placeName": "California Academy of Sciences",
                        "placeInformation": "Natural history museum with an aquarium, planetarium & scientists conducting a variety of research.",
                        "openTime": "9:30AM - 5PM",
                        "address": "55 Music Concourse Dr San Francisco, CA 94118",
                        "rating": 4.0,
                        "imageURL": "https://www.arch2o.com/wp-content/uploads/2016/11/Arch2O-California-Academy-of-Sciences-Renzo-Piano-Building-Workshop-Architects-33.jpg"
                    },
                    {
                        "placeId": 15,
                        "latitude": 37.756559,
                        "longitude": -122.473132,
                        "duration": 0.5,
                        "placeName": "16 Avenue Tiled Steps",
                        "placeInformation": "Creative, community-driven mosaic featuring a flowing sea to stars design up a 163-step stairway.",
                        "openTime": "All Day",
                        "address": "16th Ave, Just West Of Grand View Park, San Francisco, CA",
                        "rating": 4.0,
                        "imageURL": "https://mymodernmet.com/wp/wp-content/uploads/archive/be41mLSNTMj0orNOWPct_1082098587.jpeg"
                    }
                ]
        }
    }

    displayMarker = () => {
        return this.state.place_list.map((store, index)=>{
            return <Marker
                key = {index}
                id = {store.placeId}
                name = {"place"}
                position = {{lat:store.latitude, lng:store.longitude}}
                // onClick = {this.state.onMarkerClick()}
            />
        })
    };



    render() {
        return (
            <Row>
                <PlaceList/>
                <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{ lat: 37.790951, lng: -122.4057}}
                >
                    {this.displayMarker(this.state.locations)}
                </Map>
            </Row>
        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAZUlXlIHJwVh45kjVVK7NSyeGs13S3QhQ'
})(SimpleMap);