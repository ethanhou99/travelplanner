import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Planitem from './Planitem';
import './Dashboard2.css';


export default class Planlist extends Component {

  render() {
      const plan = this.props.plans
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

      return (

            
          <div>

              {/* <Route path='' exact render={() => (this.state.plans
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(plan => <Planitem value={plan}  />))} /> */}
               {/* {this.props.plans
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(plan => <Planitem value={plan} />)} */}
                  {/* <Planitem value={this.state.plans[1]} /> */}
              {/* <Route path='/profile/edit' render={() =>  <div className="fade-cover"></div>} /> */}
              {
                  plan.map((i) => {
                      return <Planitem value={i} />
                  })
              }
              
          </div>
      );
  }
}
