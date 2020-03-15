import React, { Component } from 'react';
import PlaceList from './PlaceList';
import User from './User'
import {Row} from 'reactstrap';
import { Grid } from '@material-ui/core';
import SimpleMap from './SimpleMap';
import { Container } from '@material-ui/core';


export default class Plan extends Component {
  render() {
    return (
      <Container fluid>
        <SimpleMap/>

      </Container>
    )
  }
}



