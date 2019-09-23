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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;