import React, { Component } from 'react';
import '../Tabuleiro/styles.css';

class Peao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cor: "",
      casa: "",
      linha: "",
      coluna: ""
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
    console.log(this.props)
    if (this.props.cor == 'branca') {
      this.setState({
        cor: 'branca',
        casa: this.props.casa,
        linha: this.props.linha,
        coluna: this.props.coluna
      })
    } else {
      this.setState({
        cor: 'preta',
        casa: this.props.casa,
        linha: this.props.linha,
        coluna: this.props.coluna
      })
    }
  }

  handleClick() {
    const { cor } = this.state;
    console.log(`peão da cor ${cor} na casa ${this.getCasa()}`);
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