import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropDownOpen: false,
      suggestedLocations: []
    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.suggestedLocations !==
    this.props.suggestedLocations) {
      this.addSuggestedLocationsToState(this.props.suggestedLocations)
    }
  }

  addSuggestedLocationsToState = (locations) => {
    const suggestedLocations = locations.map(({place_id, id, description}) => ({key: id, value: place_id, text: description}))
    this.setState({
      suggestedLocations,
      isDropDownOpen: true
    })
  }

  handleDropDownChange = (e) => {
    this.setState({
      isDropDownOpen: false
    })
    this.props.handleUpdateAddress(e)
  }

  onFocus = () => this.setState({ isDropDownOpen: true },
    () => this.setState({ isDropDownOpen: false }));

  render() {
    return (
      "Hello"
    )
  }
}

export default SearchInput;