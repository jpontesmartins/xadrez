import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selecionarPeca } from '../../store/actions';
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

  componentDidUpdate(prevProps) { }

  handleClick() {
    const { cor, peca, linha, coluna, selecionarPeca } = this.props;
    selecionarPeca(this.getCasa(), peca, linha, coluna, cor);
    console.log(`${peca.descricao} da cor ${cor} na casa ${this.getCasa()}`);
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

  pieceIsSelected() {
    return this.props.linha === this.props.pecaSelecionada.linha &&
      this.props.coluna === this.props.pecaSelecionada.coluna;
  }
}

const mapStateToProps = state => ({
  pecaSelecionada: state.pecas
});

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarPeca }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peca);