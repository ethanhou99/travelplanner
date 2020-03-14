import React, { Component } from 'react';
import PlaceList from './PlaceList';
import User from './User'

export default class Plan extends Component {
  render() {
    return (
      <div>
        <User />
        <PlaceList />
      </div>
    )
  }
}
