import { Component } from 'react';
import { Switch } from 'react-native';

var React = require('react-native');

export default class SwitchComp extends Component{

  constructor(props) {
    super(props);
    this.state = {value: false};
}

  _onValueChange = (value) => {
    this.setState({value: value});
    if (this.props.onValueChange) {
      this.props.onValueChange(value);      
    }
  }

  render() {
    return (
      <Switch
        onValueChange={this._onValueChange}
        value={this.state.value}/>
      );
  }
}