import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard2.css';

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn btn btn-outline-primary" to="/dashboard2/edit" style={{marginBottom: '10px'}}>Edit profile</Link>
                <Link className="btn btn-outline-secondary" to="/login">Log out</Link>
            </div>
        );
    }
}

export default ProfileAction;
