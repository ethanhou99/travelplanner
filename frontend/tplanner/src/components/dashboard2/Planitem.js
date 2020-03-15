import React, { Component } from 'react';
import moment from 'moment';
import './Dashboard2.css';
import {Row} from 'reactstrap';
import styled from 'styled-components';

const Left = styled.div`
    width: 40%
`

const Right = styled.div`
    width: 60%
`

const Duration = styled.h4`
font-weight: 350;
color: black;
margin: 0 5px;
text-align: right;
font-size: 48
`

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  color: #686868;
  margin: 0 5px;
  text-align: right;
`

export default class Planitem extends Component {
  render() {
    return (

        <div className="plan">
            <div className="row relative">
                <Left>
                    <img className="city-view" src={this.props.value.dailyPlanList[0].placeList[0].imageURL}/>
                </Left>
                <Right>
                    <Duration>A {this.props.value.dailyPlanList.length}-days travel plan at <b>San Francisco</b></Duration>
                    <p><Body>Created at {this.props.value.date}</Body></p>
                    <div class="text-right">
                        <button type="button" class="btn btn btn-outline-primary btn-small" style={{marginRight: '10px'}} >View</button> 
                    </div>
                </Right>
            </div>
        </div>
    );
}
}
