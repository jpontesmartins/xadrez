import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { moverPeca } from '../../store/actions';
import { BRANCA, PRETA } from '../constants';

import './styles.css';

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
    console.log(this.props);
    console.log(`Mover peca para cá: ${this.getCasa()}`);
    console.log(this.props.pecaSelecionada);

    const { pecaSelecionada, coluna, linha, corDaPeca, moverPeca } = this.props;
    moverPeca(pecaSelecionada, linha, coluna, corDaPeca);

  }

  render() {
    return (
      <div onClick={this.handleClick} className="vazia">
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pecaSelecionada: state.selecionarPeca.pecaSelecionada,
  corDaPeca: state.selecionarPeca.cor
});

const mapDispatchToProps = dispatch => bindActionCreators({ moverPeca }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Casa);