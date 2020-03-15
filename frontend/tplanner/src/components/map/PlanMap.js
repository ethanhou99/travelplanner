import React, { Component } from 'react'
import DailyPlan from './DailyPlan';
import {Row, Container} from 'reactstrap';
import { Grid } from '@material-ui/core';
import Axio from 'axios';
import MapContainer from './MapDemo';
import "./MapContainer.css";


// const mapStyles = {
//   flexDirection: left,
//   width: '50%',
//   height: '100%',
// };
//
// const PlanStyles = {
//   flexDirection: right,
//   width: '50%',
//   height: '100%',
// };

export default class PlanMap extends Component {


  constructor(props) {
    super(props);
    this.state = {
      activeDate: 0,
      data : [
        {
          lat: 37.785845,
          lng: -122.400965
        },
        {
          lat: 37.777292,
          lng: -122.43261
        },
        {
          lat: 37.8081269,
          lng: -122.4253858
        }
      ],
      days: {
        "planId": null,
        "userId": 1,
        "date": '2020-0301',
        "dailyPlanList": [
          {
            "placeList": [
              {
                "placeId": 1,
                "latitude": 37.785845,
                "longitude": -122.400965,
                "duration": 1.5,
                "placeName": "San Francisco Museum of Modern Art",
                "placeInformation": "Contemporary & modern paintings, installations, photographs, media & more in a sleek space.",
                "openTime": "10AM - 5PM",
                "address": "151 3rd St, San Francisco, CA 94103",
                "imageURL": "https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg"
              },
              {
                "placeId": 2,
                "latitude": 37.777292,
                "longitude": -122.43261,
                "duration": 0.5,
                "placeName": "The Painted Ladies",
                "placeInformation": "Historical row of Victorian houses well-known for appearances on movies, TV shows & postcards.",
                "openTime": "5AM - 12AM",
                "address": "Steiner St &, Hayes St, San Francisco, CA 94117",
                "imageURL": "https://d3qvqlc701gzhm.cloudfront.net/thumbs/b0a762501eab02f8955153c20a54b3e5078bfd1c9418dde96e623bbbcd82312e-750.jpg"
              }
            ],
            "dailyPlanId": null,
            "dayNo": 1
          }, {
            "placeList": [
              {
                "placeId": 1,
                "latitude": 37.777292,
                "longitude": -122.43261,
                "duration": 0.5,
                "placeName": "The Painted Ladies",
                "placeInformation": "Historical row of Victorian houses well-known for appearances on movies, TV shows & postcards.",
                "openTime": "5AM - 12AM",
                "address": "Steiner St &, Hayes St, San Francisco, CA 94117",
                "imageURL": "https://d3qvqlc701gzhm.cloudfront.net/thumbs/b0a762501eab02f8955153c20a54b3e5078bfd1c9418dde96e623bbbcd82312e-750.jpg"
              }
              
            ],
            "dailyPlanId": null,
            "dayNo": 2
          }
        ]
      }
    };

    // this.state = {
    //   days: []
    // }
  }

  // componentDidMount(){
  //   Axios.get("http://localhost:8080/plan/1")
  //       .then(res => {
  //           if (res.data != null) {
  //               console.log(res.data)
  //               const localData = res.data;
  //               this.setState({
  //                   days: localData
  //               })
  //           }
  //       })
// }


  render() {
    return (
      <Container fluid>
        <Row className="plan-map-container">
          <Grid xs={12} className="Grid-map">
            <MapContainer className="map-container" center={this.state.data[1]} zoom={3} data={this.state.data} />
          </Grid>
          <Grid xs={6} className="Grid-plan">
            <DailyPlan className="daily-plan" days = {this.state.days}/>
          </Grid>
        </Row>
      </Container>
    )
  }
}
