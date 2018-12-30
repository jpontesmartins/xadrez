import React, { Component } from 'react';

class Torre extends Component {
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
    const { cor } = this.state;
    console.log(`Cavalo da cor ${cor} na casa ${this.getCasa()}`);
  }

  render() {
    const cavalo = "♞";
    const { cor } = this.state;

    return (
      <div className={cor} onClick={this.handleClick}>
        <span >
          {cavalo}
        </span>
      </div>
    );
  }
}

export default Torre;