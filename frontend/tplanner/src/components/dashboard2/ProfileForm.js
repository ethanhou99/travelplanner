import './Dashboard2.css';
import React, { Component } from 'react';
import './Dashboard2.css';

export default class ProfileForm extends Component {
  render() {
    let props = this.props
    return (
      <div className="col-2of5 bg-white profile">
        <div className="relative img-edit">
            <img className="avatar" src="./sample-avatar.png" alt="upload-img" />
        </div>
        <h5 id="username">@User A</h5>
        <input className="input-profile" type="text" placeholder="User Name" />
        <input className="input-profile" type="text" placeholder="Location"  />
        <textarea className="input-profile" placeholder="Personal Bio" ></textarea>
        <button className="btn-primary space-top" type="button" >Save</button>
        <button className="btn-border space-top" type="button">Cancel</button>
      </div>
    );
}
}
