import React, { Component } from 'react';

class Torre extends Component {
  constructor() {
    super();

    this.state = {
      cor: ""
    }
  }

  componentDidMount() {
    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca'
      })
    } else {
      this.setState({
        cor: 'preta'
      })
    }
  }

  render() {
    const cavalo = "♞";
    const { cor } = this.state;

    return (
      <div className={cor}>
        <span >
          {cavalo}
        </span>
      </div>
    );
  }
}

export default Torre;