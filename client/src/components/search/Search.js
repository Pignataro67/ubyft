import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Button from '../Button';
import Card from '../Card';

class Search extends Component {

  state = {
    startingLocation: '',
    destination: ''
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  handleChangeStart = (e) => {
    this.setState({
      startingLocation: e.target.value,
    })
  }

  handleChangeDestination = (e) => {
    this.setState({
      destination: e.target.value
    })
  }

  handleStartSearch = (e) => {
    e.preventDefault()
    e.stopPropogation()

    this.props.actionsfetchStartingLocation(this.state.startingLocation)
  }

  handleDropOffSearch = (e) => {
    console.log(this.state.dropOff)
    e.preventDefault()
    e.stopPropogation()
    this.props.actions.fetchDropOff(this.state.dropOff)
  }

  handleUpdateStartAddress = (e) => {
    this.setState({
      startingLocation: e.currentTarget.innerText,
    })
  }

  handleUpdateDropOffAddress = (e) => {
    this.setState({
      dropOff: e.currentTarget.innerText,
    })
  }

  render() {
    return (
        <Card >
        <SearchInput label="Pickup Location" 

        suggestedLocations = {this.props.suggestedStartingLocations} 
        onChange={this.handleChangeStart} 
        onSubmit={this.handleStartSearch}
        handleUpdateAddress={this.handleUpdateAddress} 
        value={this.state.pickupLocation}/>
        <br/>
        <SearchInput label="DropOff" 
          suggestedLocations={this.props.suggestedDropOffs}
          onChange={this.handleChangeDestination} 
          onSubmit={this.handleDropOffSearch}
          handleUpdateAddress={this.handleUpdateDropOffAddress}/>
        <br/>
        <Button buttonTitle="Submit" onClick={this.handleFormSubmit}/>
    </Card >
    )
  }
}

export default Search;