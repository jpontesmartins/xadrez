import React, { Component } from 'react';
import './styles.css';
import { BRANCA, PRETA } from '../constants';

class Casa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cor: "",
      linha: this.props.linha,
      coluna: this.props.coluna
    }

    this.handleClick = this.handleClick.bind(this);
  }

  getCasa() {
    if (this.state) {
      if (this.state.linha && this.state.coluna) {
        return `${this.state.coluna}${this.state.linha}`;
      }
    }
    return 'vazio';

  }

  componentDidMount() {
    if (this.props.cor == BRANCA) {
      this.setState({
        cor: BRANCA
      })
    } else {
      this.setState({
        cor: PRETA
      })
    }
  }

  handleClick() {
    console.log(`Casa vazia: ${this.getCasa()}`);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="vazia">
      </div>
    );
  }
}

export default Casa;