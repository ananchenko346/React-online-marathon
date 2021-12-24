import React from 'react';
import {Component} from 'react';

import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appData: 'React Marathon'
    }
  }

  changeText = () => {
    if (this.state.appData === 'React Marathon') {
      this.setState({
        appData: this.state.appData.toLowerCase()
      })
    } else {
      this.setState({
        appData: 'React Marathon'
      })
    }
  }

  render() {
    const {appData} = this.state;
    return (
      <div onClick={this.changeText}>
        {appData}
      </div>
    )
  }
}
