import React, { Component } from 'react';

class Rainha extends Component {
  constructor() {
    super();

    this.state = {
      cor: ""
    }
  }

  componentDidMount() {
    console.log('props: ');
    console.log(this.props);
    console.log(this.state);

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
    const rainha = "♛";
    const { cor } = this.state;
    
    return (
      <div className={cor}>
        <span>
          {rainha}
        </span>
      </div>
    );
  }
}

export default Rainha;