import React, { Component } from 'react';
import './styles.css';
import Coluna from '../Coluna';
import builderColumns from './builderColumns';

class Tabuleiro extends Component {
  constructor() {
    super();

    this.state = {
      colunaImpar: "container-chess-white",
      colunaPar: "container-chess-black",
      colunaA: builderColumns.buildColumnA(),
      colunaB: builderColumns.buildColumnB(),
      colunaC: builderColumns.buildColumnC(),
      colunaD: builderColumns.buildColumnD(),
      colunaE: builderColumns.buildColumnE(),
      colunaF: builderColumns.buildColumnF(),
      colunaG: builderColumns.buildColumnG(),
      colunaH: builderColumns.buildColumnH(),
    }
  }



  render() {
    const { colunaImpar, colunaPar, colunaA, colunaB, colunaC, colunaD, colunaE, colunaF, colunaG, colunaH } = this.state;

    return (
      <div> xadrez da ovelha estoica :)
        <div className="container">

          <Coluna colunaImpar={colunaImpar} nome="A" pecas={colunaA} />

          <Coluna colunaImpar={colunaPar} nome="B" pecas={colunaB} />

          <Coluna colunaImpar={colunaImpar} nome="C" pecas={colunaC} />

          <Coluna colunaImpar={colunaPar} nome="D" pecas={colunaD} />

          <Coluna colunaImpar={colunaImpar} nome="E" pecas={colunaE} />

          <Coluna colunaImpar={colunaPar} nome="F" pecas={colunaF} />

          <Coluna colunaImpar={colunaImpar} nome="G" pecas={colunaG} />

          <Coluna colunaImpar={colunaPar} nome="H" pecas={this.state.colunaH} />


        </div>

      </div>
    );
  }
}

export default Tabuleiro;