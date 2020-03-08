import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clearCurrentProfile } from "../../actions/profileActions";
import { logoutUser } from "../../actions/authActions";

class Search extends Component {

  render() {
      const { isAuthenticated } = this.props.auth;

        const signUp = (
          <Link to="/registWarning" className="btn btn-secondary btn-lg btn-block">
            Plan it!
          </Link>
        );

        const signUpWarn = (
          <Link to="/registWarning" className="btn btn-secondary btn-lg btn-block">
            Plan it!
          </Link>
        );

      return(
      <div className="search">
        <div className="search-inner">
          <h3 className="search-title text-dark font-weight-bold">Plan Your Trip</h3>
          <div class="form-group">
            <input className="form-control" placeholder="Destination"></input>
          </div>
          <div class="form-group">
            <input className="form-control" placeholder="Duration"></input>
          </div>
          <div class="form-group">
            <input className="form-control" placeholder="Traveler"></input>
          </div>
          {isAuthenticated ? signUp : signUpWarn}
        </div>
      </div>)

    }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Search);