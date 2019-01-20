import React, { Component } from 'react';
import './styles.css';
import Coluna from '../Coluna';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { montarTabuleiro } from '../../store/actions'

class Tabuleiro extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.montarTabuleiro();
  }

  render() {
    const { colunaA, colunaB, colunaC, colunaD, colunaE, colunaF, colunaG, colunaH } = this.props;
    return (

      <div> xadrez da ovelha estoica :)
        <div onClick={this.props.montarTabuleiro}>[organizar tabuleiro]</div>
        <div className="container">

          <Coluna tipoDeColuna="container-chess-white" nome="A" pecas={colunaA} />

          <Coluna tipoDeColuna="container-chess-black" nome="B" pecas={colunaB} />

          <Coluna tipoDeColuna="container-chess-white" nome="C" pecas={colunaC} />

          <Coluna tipoDeColuna="container-chess-black" nome="D" pecas={colunaD} />

          <Coluna tipoDeColuna="container-chess-white" nome="E" pecas={colunaE} />

          <Coluna tipoDeColuna="container-chess-black" nome="F" pecas={colunaF} />

          <Coluna tipoDeColuna="container-chess-white" nome="G" pecas={colunaG} />

          <Coluna tipoDeColuna="container-chess-black" nome="H" pecas={colunaH} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  colunaA: state.montarTabuleiro.colunaA,
  colunaB: state.montarTabuleiro.colunaB,
  colunaC: state.montarTabuleiro.colunaC,
  colunaD: state.montarTabuleiro.colunaD,
  colunaE: state.montarTabuleiro.colunaE,
  colunaF: state.montarTabuleiro.colunaF,
  colunaG: state.montarTabuleiro.colunaG,
  colunaH: state.montarTabuleiro.colunaH
});

const mapDispatchToProps = dispatch => bindActionCreators({ montarTabuleiro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabuleiro);