import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";

export const movePiece = (payload, state) => {
  const { coluna, linha, peca, cor, casaOrigem } = payload;
  const destino = { peca, linha, cor, coluna };
  const origem = { 
    linha: casaOrigem.split("")[1], 
    coluna: casaOrigem.split("")[0] 
  }

  if (origem.coluna === destino.coluna) {
    return {
      ...state,
      colunaA: mesmaColuna(A, origem, state, destino),
      colunaB: mesmaColuna(B, origem, state, destino),
      colunaC: mesmaColuna(C, origem, state, destino),
      colunaD: mesmaColuna(D, origem, state, destino),
      colunaE: mesmaColuna(E, origem, state, destino),
      colunaF: mesmaColuna(F, origem, state, destino),
      colunaG: mesmaColuna(G, origem, state, destino),
      colunaH: mesmaColuna(H, origem, state, destino),
    }
  } else {
    return {
      ...state,
      colunaA: colunasDiferentes(A, origem, state, destino),
      colunaB: colunasDiferentes(B, origem, state, destino),
      colunaC: colunasDiferentes(C, origem, state, destino),
      colunaD: colunasDiferentes(D, origem, state, destino),
      colunaE: colunasDiferentes(E, origem, state, destino),
      colunaF: colunasDiferentes(F, origem, state, destino),
      colunaG: colunasDiferentes(G, origem, state, destino),
      colunaH: colunasDiferentes(H, origem, state, destino),
    }
  }

}

export const mesmaColuna = (colunaAtual, origem, state, destino) => {
  const allColumns = organizarPecas(state);

  if (colunaAtual == destino.coluna) {
    return movePieceToTheSameColumn(origem, allColumns.get(origem.coluna), destino);
  } else {
    return allColumns.get(colunaAtual);
  }

}

export const colunasDiferentes = (colunaAtual, origem, state, destino) => {
  const { peca, linha, cor, coluna } = destino;
  const allColumns = organizarPecas(state);

  if (colunaAtual == origem.coluna) {
    return esvaziaCasaDaPecaMovimentada(origem, allColumns);
  }

  if (coluna == colunaAtual) {
    return movePieceToAnotherColumn(coluna, allColumns.get(coluna), peca, linha, cor);
  } else {
    return allColumns.get(colunaAtual);
  }
}


/**
 * 
 * 
 * 
 * 
 * 
 */

const esvaziaCasaDaPecaMovimentada = (origem, allColumns) => {
  const novaColuna = new Map();
  allColumns.get(origem.coluna).map((linhaProps) => {
    if (linhaProps.props.peca) {
      const peca = buildPiece(linhaProps, origem.coluna);
      novaColuna.set(parseInt(linhaProps.props.linha), peca);
    } else {
      const casaVazia = <Casa coluna={origem.coluna} linha={parseInt(linhaProps.props.linha)} />;
      novaColuna.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const pecaVazia = <Casa coluna={origem.coluna} linha={parseInt(origem.linha)} />
  novaColuna.set(parseInt(origem.linha), pecaVazia);

  return posicionarPecas(novaColuna);
}


const movePieceToTheSameColumn = (origem, colunaCompleta, destino) => {
  const { peca, linha, cor } = destino;

  let linhas = new Map();
  colunaCompleta.map((linhaProps, i) => {
    if (linhaProps.props.peca) {
      const pecaa = buildPiece(linhaProps, origem.coluna);
      linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      const casaVazia = <Casa coluna={origem.coluna} linha={parseInt(linhaProps.props.linha)} />;
      linhas.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const novaPosicaoDaPeca = <Peca peca={peca} 
    cor={cor} coluna={origem.coluna} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), novaPosicaoDaPeca);

  const casaVazia = <Casa coluna={origem.coluna} linha={parseInt(origem.linha)} />
  linhas.set(parseInt(origem.linha), casaVazia);

  return posicionarPecas(linhas);
}

const movePieceToAnotherColumn = (nomeColuna, colunaCompleta, peca, linha, cor) => {

  let linhas = new Map();
  colunaCompleta.map((linhaProps) => {

    if (linhaProps.props.peca) {
      const pecaa = buildPiece(linhaProps, nomeColuna);
      linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
      linhas.set(parseInt(linhaProps.props.linha), casaVazia);

    }
  });

  const pecaEmNovaPosicao =
    <Peca peca={peca} cor={cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), pecaEmNovaPosicao);

  return posicionarPecas(linhas);
}

//separar num outro arquivo
//codigo replicado em "captura.js"

function buildPiece(linhaProps, nomeColuna) {
  return <Peca peca={linhaProps.props.peca}
    cor={linhaProps.props.cor} coluna={nomeColuna}
    linha={linhaProps.props.linha}>
  </Peca>;
}

let posicionarPecas = linhas => {
  return [
    linhas.get(8), linhas.get(7), linhas.get(6), linhas.get(5),
    linhas.get(4), linhas.get(3), linhas.get(2), linhas.get(1)
  ];
}
