import React, { Component } from 'react';
import '../Tabuleiro/styles.css';

class Peao extends Component {
  constructor() {
    super();

    this.state = {
      cor: "",
      casa: ""

    }

    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca',
        casa: this.props.casa
      })
    } else {
      this.setState({
        cor: 'preta',
        casa: this.props.casa
      })
    }
  }

  handleClick() {
    const { cor, casa } = this.state;
    console.log(`peão da cor ${cor} na casa ${casa}`);
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