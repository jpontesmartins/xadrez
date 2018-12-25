import React, { Component } from 'react';
import '../App/styles.css';

class Peao extends Component {
  constructor() {
    super();

    this.state = {
      cor: ""
    }

    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    console.log('peao');
  }

  render() {
    const peao = "♟";
    const { cor } = this.state;

    return (
      <div className={cor} onClick={this.handleClick}>
        <span>
          {peao}
        </span>
      </div>
    );
  }
}


export default Peao;