import React, { Component } from 'react';

import './input.css';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: false,
      numVal: false,
      operatorName: ''
    };

    this.focusRef = React.createRef();
    this.operatorValue = React.createRef();
    this.iconRef = React.createRef();
    this.numRef = React.createRef();
  };

  componentDidMount() {
    this.focusRef.current.focus();
  };

  componentDidUpdate() {
    (this.focusRef.current.value.length < 2) ? this.focusRef.current.focus()
      : this.numRef.current.focus();
  };

  handleChange = (e) => {
    const kyivstar = [67, 68, 96, 97, 98];

    let data = e.target.value.replace(/\D/g, '');

    this.setState({ data });

    if (data.length === 2) {
      for (let i = 0; i < kyivstar.length; i++) {
        if (parseInt(data) === kyivstar[i]) {
          this.operatorValue.current.innerHTML = 'Kyivstar';
          this.setState({ data: true });
          break;
        } else if (parseInt(data) === 50 || parseInt(data) === 66 || parseInt(data) === 95 || parseInt(data) === 99) {
          this.operatorValue.current.innerHTML = 'Vodafone';
          this.setState({ data: true });
        } else if (parseInt(data) === 63 || parseInt(data) === 73 || parseInt(data) === 93) {
          this.operatorValue.current.innerHTML = 'Lifecell';
          this.setState({ data: true });
        } else if (parseInt(data) === 91) {
          this.operatorValue.current.innerHTML = '3mob';
          this.setState({ data: true });
        } else if (parseInt(data) === 92) {
          this.operatorValue.current.innerHTML = 'People.net';
          this.setState({ data: true });
        } else if (parseInt(data) === 89 || parseInt(data) === 94) {
          this.operatorValue.current.innerHTML = 'intertelecom';
          this.setState({ data: true });
        } else if (!parseInt(data)) {
          this.operatorValue.current.innerHTML = 'Unknown';
        } else {
          this.operatorValue.current.innerHTML = 'Unknown';
          this.setState({ data: true });
        }
      }
    };
  };

  handleChangePhone = (e) => {
    const number = e.target.value.replace(/\D/g, '');

    this.setState({ number });
    if (number.length === 7) {
      this.setState({ numVal: true });
    };
  };

  changeIcon = () => {
    if (this.numRef.current.value.length >= 7 && this.focusRef.current.value.length === 2) {
      return '✔️';
    } else {
      return '-';
    };
  };

  render() {
    const { data, numVal } = this.state;

    return <div>
      <span data-testid="operator-name" ref={this.operatorValue}></span>
      <span>+38 0</span>
      <input
        type="text"
        data-testid="operator-input"
        onInput={this.handleChange}
        ref={this.focusRef}
      />
      {
        (data && numVal) ?
          (<span data-testid="check-icon"
            className="check-icon"
            role="img"
            aria-label="input-checked">
            ✔️
          </span>) :
          <span data-testid="check-icon"> - </span>
      }
      <input
        type="text"
        data-testid="phone-input"
        onInput={this.handleChangePhone}
        ref={this.numRef}
      />
    </div>
  };
}