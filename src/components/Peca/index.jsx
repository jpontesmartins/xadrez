import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selecionarPeca, capturarPeca, limpar } from '../../store/actions';
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
    return this.props.linha === this.props.pecaSelecionada.linha &&
      this.props.coluna === this.props.pecaSelecionada.coluna;
  }

  componentDidUpdate(prevProps) { }

  handleClick() {
    const { cor, peca, linha, coluna, aguardandoSegundoClick,
      pecaDeAtaque, selecionarPeca, capturarPeca, limpar, pecaSelecionada } = this.props;

    if (aguardandoSegundoClick && pecaDeAtaque.cor !== cor) {
      const pecaOrigemAtaque = pecaSelecionada;
      capturarPeca(this.getCasa(), peca, linha, coluna, cor, pecaDeAtaque, pecaOrigemAtaque);
      limpar();
    } else {
      selecionarPeca(this.getCasa(), peca, linha, coluna, cor, true);

    }
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

}

const mapStateToProps = state => ({
  pecaDeAtaque:  {
    peca: state.pecas.pecaSelecionada,
    cor: state.pecas.cor
  },
  pecaSelecionada: state.pecas,
  aguardandoSegundoClick: state.pecas.aguardandoSegundoClick
});

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarPeca, capturarPeca, limpar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peca);