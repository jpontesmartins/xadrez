import React, { Component } from 'react';
import './styles.css';
import Coluna from '../Coluna';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { montarTabuleiro } from '../../actions'

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
  colunaA: state.tabuleiroReducer.colunaA,
  colunaB: state.tabuleiroReducer.colunaB,
  colunaC: state.tabuleiroReducer.colunaC,
  colunaD: state.tabuleiroReducer.colunaD,
  colunaE: state.tabuleiroReducer.colunaE,
  colunaF: state.tabuleiroReducer.colunaF,
  colunaG: state.tabuleiroReducer.colunaG,
  colunaH: state.tabuleiroReducer.colunaH
});

const mapDispatchToProps = dispatch => bindActionCreators({ montarTabuleiro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabuleiro);