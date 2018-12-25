import React, { Component } from 'react';

class Bispo extends Component {
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
    const bispo = "♝";
    const { cor } = this.state;
    return (
      <div className={cor}>
        <span>
          {bispo}
        </span>
      </div>
    );
  }
}

export default Bispo;