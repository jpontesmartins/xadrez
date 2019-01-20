import React, { Component } from 'react';
import '../Tabuleiro/styles.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selecionarPeca } from '../../store/actions';
import PecaComponent from './PecaComponent';

class Peca extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleSecondClick = this.handleSecondClick.bind(this);
  }

  getCasa() {
    if (this.props) {
      if (this.props.linha && this.props.coluna) {
        return `${this.props.coluna}${this.props.linha}`;
      }
    }
    return 'vazio';
  }

  handleClick() {
    const { cor,
            pecaSelecionada,
            peca,
            selecionarPeca 
          } = this.props;

    selecionarPeca();

    if (pecaSelecionada) {
      console.log('clique de movimentação');
    } else {
      console.log('clique de seleção de peça');
      this.handleSecondClick();
    }

    console.log(`${peca.descricao} da cor ${cor} na casa ${this.getCasa()}`);
  }

  handleSecondClick() {
    console.log('fazer a validação do segundo clique, o clique de escolha da casa de destino');
  }

  render() {
    const { cor, peca } = this.props;

    return (
      <PecaComponent cor={cor} onClick={this.handleClick} simbolo={peca.simbolo} />
    );
  }
}

Peca.propTypes = {
  cor: PropTypes.string,
  descricao: PropTypes.string,
  simbolo: PropTypes.string,
  linha: PropTypes.string,
  coluna: PropTypes.string,
  casa: PropTypes.string,
  pecaSelecionada: PropTypes.bool
};

const mapStateToProps = state => ({
  list: state.selecionarPeca
});

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarPeca }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Peca);