import React, { Component } from 'react';
import moment from 'moment';
import './Dashboard2.css';


export default class Planitem extends Component {
  render() {
    return (
        <div className="plan">
            <div className="row relative">
                <img className="city-view" src={this.props.value.cityImgUrl}/>
                <h4>A {this.props.value.duration}-days travel plan at <b>{this.props.value.location}</b></h4><br></br>

                {/* <h5>@{this.props.value.author.username}</h5> */}
                <p><h5>Created at {moment(this.props.value.createdAt).calendar()}</h5></p>
                <button className='btn-view' type="button" >View</button>
            </div>
        </div>
    );
}
}
