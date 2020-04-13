import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Coluna from '../Coluna';
import { montarTabuleiro } from '../../store/actions'

import './styles.css';

class Tabuleiro extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { montarTabuleiro } = this.props;
    montarTabuleiro();
  }

  componentDidUpdate(prevProps) {  }

  render() {
    const {
      colunaA, colunaB, colunaC,
      colunaD, colunaE, colunaF,
      colunaG, colunaH, montarTabuleiro } = this.props;

    const white = "container-chess-white";
    const black = "container-chess-black";

    return (

      <div> xadrez da ovelha estoica :)
        <div onClick={montarTabuleiro}>[organizar tabuleiro]</div>
        <div className="container">

          <Coluna tipoDeColuna={white} nome="A" pecas={colunaA} />
          <Coluna tipoDeColuna={black} nome="B" pecas={colunaB} />
          <Coluna tipoDeColuna={white} nome="C" pecas={colunaC} />
          <Coluna tipoDeColuna={black} nome="D" pecas={colunaD} />
          <Coluna tipoDeColuna={white} nome="E" pecas={colunaE} />
          <Coluna tipoDeColuna={black} nome="F" pecas={colunaF} />
          <Coluna tipoDeColuna={white} nome="G" pecas={colunaG} />
          <Coluna tipoDeColuna={black} nome="H" pecas={colunaH} />

        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  colunaA: state.tabuleiro.colunaA,
  colunaB: state.tabuleiro.colunaB,
  colunaC: state.tabuleiro.colunaC,
  colunaD: state.tabuleiro.colunaD,
  colunaE: state.tabuleiro.colunaE,
  colunaF: state.tabuleiro.colunaF,
  colunaG: state.tabuleiro.colunaG,
  colunaH: state.tabuleiro.colunaH
});

const mapDispatchToProps = dispatch => bindActionCreators({ montarTabuleiro }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Tabuleiro);