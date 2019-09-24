import React, { Component } from 'react';
import logo from './logo.svg';	import { connect } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ConfirmRouteContainer from './containers/ConfirmRouteContainer';
import ResultsContainer from './containers/ResultsContainer';
import SearchContainer from './containers/SearchContainer';
import { getMapboxKey } from './actions/fetchLocations'
import './App.css';

function App() {
  return (
    <div style ={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'auto',
      height: 'auto',
      backgroundImage: `url(${Background})`
    }} className="App">
    <Router>
      <div>
        <Route exact path="/" component ={SearchContainer}/>
        <Route exact path="/confirm_route" component={ConfirmRouteContainer}/>
        <Route exact path="/results" component={ResultsContainer}/>
      </div>
    </Router>
  </div>
  );
}

export default App;