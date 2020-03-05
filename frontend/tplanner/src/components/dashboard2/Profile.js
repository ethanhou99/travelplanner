import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ProfileAction from './ProfileAction';
import './Dashboard2.css';

class Profile extends Component {

    render() {
        return (
            <div className="col-2of5 bg-white profile">
                <img className="avatar" src={this.props.avatar} alt="avatar" />
                <h3>User A</h3>
                <h5>@usera</h5>
                <h4><i className="fas fa-map-marker-alt"></i> Seattle</h4>
                <p className="center">A person who likes to travels a lot and goes around from one place to the another in pursuit of amusement, fun or pleasure is called a ‘Gallivanter’. And I know the meaning by-heart because I am one of them.</p>
                <Route path='/dashboard2' component={ProfileAction} />
            </div>
        );
    }
}

export default Profile;
