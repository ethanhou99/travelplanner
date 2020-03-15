import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import Profile from './Profile';
import ProfileForm from './ProfileForm'
import PlanList from './Planlist';
import './Dashboard2.css';
import {Row} from 'reactstrap';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`

const Left = styled.div`
  width: 38%;
  margin-left: 1%;
  margin-right: 1%; 
`

const Right = styled.div`
  width: 58%;
  margin-left: 1%;
  margin-right: 1%; 
`


export default class Dashboard2 extends Component {

  constructor(props) {
    super(props)
    this.state = {

      plans: [
        {
            "planId": 1,
            "userId": 1,
            "date": "2020-3-23",
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
                        "rating": 5.0,
                        "imageURL": "https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg"
                    }
                    ],
                    "dayNo": 1,
                    "dailyPlanId": 1
                }, {
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
                      "rating": 5.0,
                      "imageURL": "https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg"
                  }
                  ],
                  "dayNo": 2,
                  "dailyPlanId": 1
              }
            ]
        },
        {
            "planId": 2,
            "userId": 1,
            "date": "2020-3-23",
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
                            "rating": 5.0,
                            "imageURL": "https://d32dm0rphc51dk.cloudfront.net/DFJnsvHbSdwLRCoRF4hPVw/wide.jpg"
                        }
                    ],
                    "dayNo": 1,
                    "dailyPlanId": 2
                }
            ]
        }
    ]




      // plans: [{
      //     "location": "Seattle",
      //     "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTxUvwXrcrJKXRFsKAGjDcc02pv_Ery7luboh8N6_vipAqNoJ5BI3ZOcIwCvfdeUc4qViGAJXNp9e5C4ErfL9C-G9IEr_3CuWahuJT85GO9GAG8PRq__zcCGKExWa-vqtRdcUYliVRkBjNDQMlxGWz1rE_4etko4M1frNb8t6A2ERWkNb0zn0YQ1JoFzr5NFG4lUOGR6j2oaLvJd441qtxFSOP1vC8dxShLmI7PL0W08r3yYfqHJvvT3peQl8MK8kdSTJa5EX2C9yYJARMb-6zQuTNR7OCmUO9qJ5nm9Ak3DUGT0=",
      //     "duration": 7,
      //     "createdAt": "2018-04-27T05:20:26.844Z"
      // },{
      //     "location": "Berlin",
      //     "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTxY3rFwYTAuzyqlWRiZc1XvbWkDJPEPhFguGR1DP0SP4ptKfi_hSfQm5FfHjayiNLXBBXPNlUAIr9etgZ7Kz9WTN2o7xFrAXulbAJ6mv5PAH4-N4UgzHXRFg-tlsGd3JGeII6k5tfuZw_uCVATVU4G2IGZlKQi9vz-Kwv7yRcFC-h4ef7YMq9sssLLLYINfsWgHHYlsXSSDLVKA8ZDiTYGldiKCOSSMg5qGIWTE2Go4s_rLF1ab1WxDYTAv8nwseUBVA8jKwHBer_9qrX2vqWy9MG3f2uh-QmepGMcWO20j8bo4=",
      //     "duration": 12,
      //     "createdAt": "2018-05-26T05:20:26.844Z"
      // },{
      //     "location": "Lisbon",
      //     "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTycalVCb3gxcorBFMtrmsr-70y4SBtBFZ6e4EiEFXf33zQBc5y00IBIvsMlRVH5vYxWDPkhwF9LfrQzzSJ8nMPsmiubJukuR40R1RzBWpdY98STnEIpCWJ3TIeqOxuQu5BC8e-V8NoAY1nZ75N1NJQFezkuh06BMcg97461ipILsQs3GuhnQL0q0NyFv2ERcFIi9_sy7dW3JLJ2c-9TFZ3iDd-8hOgoSrdRyXu4hiE9rkiC5vNRx8FnzaH54154VRkLuuEsf89cr3rA7Oskhyi0NbgKspEPUtQzwzGBe5Se1ywg=",
      //     "duration": 5,
      //     "createdAt": "2019-08-31T05:10:46.617Z"
      // },{
      //     "location": "Vancouver",
      //     "cityImgUrl": "http://api-images-www.triposo.com/api/20190906/image/gAAAAABeTyeDtH_DOdWT1HEPjBHevecPwEeO6lasX8Cwy1Y131rpu59NaPMJ91r7XEyN-jcDbIXVYnh3NTDsU3Zi1y0HIY-4TbZqqkiymvzW8b-USntRQLsGduEaP0SFfWssADGYij4vVLUp3ejv3apPlqWhGthBtIvbYZOxmIJu12FhOvrlL6IMNtkyCw-dfiR109Jl3ObPiJuoVdnKsNJpJaFb_9TNCgS7hSF0HpNVbmKX16ACiDFwYFGjlhSI0j1XVlIQ5pVdD26FeS8CzvW_5nKiDLnc6AmROK5FMp3l08OhYx76Jw4=",
      //     "duration": 9,
      //     "createdAt": "2020-01-16T19:03:41.924Z"
      // }]
  }

  }
  render() {
    return (
      <Container >
        <Row>
          <Left>
            <Route path='/dashboard2' exact render={() => <Profile />} />
            <Route path='/dashboard/edit' render={() => <ProfileForm />} />
          </Left>
          <Right>
            <PlanList plans={this.state.plans} />
          </Right>
        </Row>
      </Container>
    )
  }
}
