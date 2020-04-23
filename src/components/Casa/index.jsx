import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { moverPeca, limpar, nextTurn } from '../../store/actions';
import { WHITE, BLACK } from '../constants';

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
    if (this.props.cor == WHITE) {
      this.setState({
        cor: WHITE
      })
    } else {
      this.setState({
        cor: BLACK
      })
    }
  }

  handleClick() {
    const { casaOrigem, pecaSelecionada, coluna, linha, corDaPeca, 
      moverPeca, limpar, aguardandoSegundoClick, nextTurn } = this.props;
    moverPeca(casaOrigem, pecaSelecionada, linha, coluna, corDaPeca);
    limpar();
    nextTurn();
  }

  componentDidUpdate(prevProps) {
    // console.log(prevProps);
    // console.log(this.props);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="vazia">
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pecaSelecionada: state.pecas.pecaSelecionada,
  corDaPeca: state.pecas.cor,
  casaOrigem: state.pecas.casaOrigem,
  tabuleiro: state.tabuleiro.tabuleiro,
  aguardandoSegundoClick: state.pecas.aguardandoSegundoClick,
  turn: state.turn
});

const mapDispatchToProps = dispatch => bindActionCreators({ moverPeca, limpar, nextTurn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Casa);