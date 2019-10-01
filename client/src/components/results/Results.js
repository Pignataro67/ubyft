import React, { Component } from 'react';
import Result from './Result';
import Button from '../Button';
import Card from '../Card';
import Loader from 'react-loaders';
import { Redirect, Link } from 'react-router-dom';

class Results extends Commponent {

  componentDidMount() {
    if(this.props.resultsReducer.isFetchingUberEstimate) {
      return <Loader type="line-scale" active />
    }
  }

  // componentDidUpdate() {
  //   return <Loader type="line-scale" hidden />
  // }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Result header={"Uber"} estimates={this.props.resultsReducer.uberEstimates} buttonTitle={"Take me to Uber"}/>
          <Result header={"Lyft"} estimates={this.props.resultsReducer.lyftEstimates} buttonTitle={"Take me to Lyft"}/>
          <Link to="/">
            <Button buttonTitle="Do you want to start over?"/>
          </Link>
      </div>
    );
  }
}

export default Results;