import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard2.css';

class ProfileAction extends Component {

    render() {
        return (
            <div className="profile-action">
                <Link className="btn-border space-top" to="/dashboard2/edit">Edit profile</Link>
                <Link className="btn-border space-top" to="/login">Log out</Link>
            </div>
        );
    }
}

export default ProfileAction;
