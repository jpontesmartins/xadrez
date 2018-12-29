import React, { Component } from 'react';
import './styles.css';
import Coluna from '../Coluna';
import builderColumns from './builderColumns';

class Tabuleiro extends Component {
  constructor() {
    super();

    this.state = {
      impar: "container-chess-white",
      par: "container-chess-black",
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
    const { impar, par, colunaA, colunaB, colunaC, colunaD, colunaE, colunaF, colunaG, colunaH } = this.state;

    return (
      <div> xadrez da ovelha estoica :)
        <div className="container">

          <Coluna tipoDeColuna={impar} nome="A" pecas={colunaA} />

          <Coluna tipoDeColuna={par} nome="B" pecas={colunaB} />

          <Coluna tipoDeColuna={impar} nome="C" pecas={colunaC} />

          <Coluna tipoDeColuna={par} nome="D" pecas={colunaD} />

          <Coluna tipoDeColuna={impar} nome="E" pecas={colunaE} />

          <Coluna tipoDeColuna={par} nome="F" pecas={colunaF} />

          <Coluna tipoDeColuna={impar} nome="G" pecas={colunaG} />

          <Coluna tipoDeColuna={par} nome="H" pecas={colunaH} />


        </div>

      </div>
    );
  }
}

export default Tabuleiro;