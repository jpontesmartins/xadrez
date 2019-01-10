import React, { Component } from 'react';

class Rainha extends Component {
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

  handleClick() {
    const { cor } = this.state;
    console.log(`Rainha da cor ${cor} na casa ${this.getCasa()}`);
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
    const rainha = "♛";
    const { cor } = this.state;
    
    return (
      <div className={cor} onClick={this.handleClick}>
        <span>
          {rainha}
        </span>
      </div>
    );
  }
}

export default Rainha;