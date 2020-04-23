import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selecionarPeca, capturarPeca, limpar, sendToCemetery, nextTurn } from '../../store/actions';
import PecaComponent from './PecaComponent';

import '../Tabuleiro/styles.css';

class Peca extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  getCasa() {
    if (this.props) {
      if (this.props.linha && this.props.coluna) {
        return `${this.props.coluna}${this.props.linha}`;
      }
    }
    return 'vazio';
  }

  pieceIsSelected() {
    return this.props.linha === this.props.pecas.linha &&
      this.props.coluna === this.props.pecas.coluna;
  }

  componentDidUpdate(prevProps) { }

  handleClick() {
    //isso aqui ta muito poluido, refatorar agrupando em objetos
    const { cor, peca, linha, coluna, turn, aguardandoSegundoClick,
      selecionarPeca, capturarPeca, limpar,
      pecas, sendToCemetery, nextTurn } = this.props;
      

    const pecaDeAtaque = {
      peca: pecas.pecaSelecionada,
      cor: pecas.cor
    }

    if (aguardandoSegundoClick && pecaDeAtaque.cor !== cor) {
      const pecaOrigemAtaque = pecas;
      capturarPeca(this.getCasa(), peca, linha, coluna, cor, pecaDeAtaque, pecaOrigemAtaque);
      sendToCemetery(peca, cor);
      nextTurn();
      limpar();

    } else {
      if (turn.currentPlayer == cor) {
        selecionarPeca(this.getCasa(), peca, linha, coluna, cor, true);
      }
    }
    // console.log(`${peca.descricao} da cor ${cor} na casa ${this.getCasa()}`);
  }

  render() {
    const { peca } = this.props;
    const SELECTED_PIECE = "blue"

    let cor = this.props.cor;
    if (this.pieceIsSelected()) {
      cor = SELECTED_PIECE;
    }

    return (
      <PecaComponent cor={cor} onClick={this.handleClick} simbolo={peca.simbolo} />
    );
  }

}

const mapStateToProps = state => ({
  turn: state.turn,
  pecas: state.pecas,
  aguardandoSegundoClick: state.pecas.aguardandoSegundoClick
});

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarPeca, capturarPeca, limpar, sendToCemetery, nextTurn }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peca);