import React, {Component} from 'react';

const style = {
  border: '1px solid black',
  display: 'inline-flex',
  flexDirection: 'column',
  padding: 5,
  margin: 10,
  paddingRight: 100
};

export default class Task1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      list: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/list')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            loading: true,
            list: result
          })
        }
      )
  }

  render() {
    const {loading, list} = this.state;

    if (!loading) {
      return <div className="border">Loading...</div>
    } else {
      return (
        <>
          {list.map(item => (
            <div key={item.id} style={style}>
              <div>id - {item.id}</div>
              <div>name - {item.name}</div>
              <div>note - {item.note}</div>
            </div>
          ))}
        </>
      )
    }
  }
}