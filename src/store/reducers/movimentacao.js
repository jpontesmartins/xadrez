import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";

import builder from "./builder";

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

export const mesmaColuna = (currentColumn, origem, state, destino) => {
  const columns = builder.setupColumns(state);

  if (currentColumn == destino.coluna) {
    return movePieceToTheSameColumn(origem, columns.get(origem.coluna), destino);
  } else {
    return columns.get(currentColumn);
  }

}

export const colunasDiferentes = (currentColumn, origem, state, destino) => {
  const { peca, linha, cor, coluna } = destino;
  const columns = builder.setupColumns(state);

  if (currentColumn == origem.coluna) {
    return esvaziaCasaDaPecaMovimentada(origem, columns);
  }

  if (coluna == currentColumn) {
    return movePieceToAnotherColumn(coluna, columns.get(coluna), peca, linha, cor);
  } else {
    return columns.get(currentColumn);
  }
}


/**
 * 
 * 
 * 
 * 
 * 
 */

const esvaziaCasaDaPecaMovimentada = (origem, columns) => {
  const rows = new Map();
  columns.get(origem.coluna).map((linhaProps) => {
    if (linhaProps.props.peca) {
      rows.set(parseInt(linhaProps.props.linha), builder.buildPiece(linhaProps.props));
    } else {
      const casaVazia = <Casa coluna={origem.coluna} linha={parseInt(linhaProps.props.linha)} />;
      rows.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const emptySquare = <Casa coluna={origem.coluna} linha={parseInt(origem.linha)} />
  rows.set(parseInt(origem.linha), emptySquare);

  return builder.setupRows(rows);
}

const movePieceToTheSameColumn = (origem, colunaCompleta, destino) => {
  const { peca, linha, cor } = destino;

  let rows = new Map();
  colunaCompleta.map((linhaProps) => {
    if (linhaProps.props.peca) {
      rows.set(parseInt(linhaProps.props.linha), builder.buildPiece(linhaProps.props));
    } else {
      const casaVazia = <Casa coluna={origem.coluna} linha={parseInt(linhaProps.props.linha)} />;
      rows.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const pieceAtNewPosition = <Peca peca={peca} cor={cor} coluna={origem.coluna} linha={parseInt(linha)}></Peca>;
  rows.set(parseInt(linha), pieceAtNewPosition);

  const emptySquare = <Casa coluna={origem.coluna} linha={parseInt(origem.linha)} />
  rows.set(parseInt(origem.linha), emptySquare);

  return builder.setupRows(rows);
}

const movePieceToAnotherColumn = (nomeColuna, colunaCompleta, peca, linha, cor) => {

  let rows = new Map();
  colunaCompleta.map((linhaProps) => {
    if (linhaProps.props.peca) {
      rows.set(parseInt(linhaProps.props.linha), builder.buildPiece(linhaProps.props));
    } else {
      const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
      rows.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const pieceAtNewPosition = <Peca peca={peca} cor={cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
  rows.set(parseInt(linha), pieceAtNewPosition);

  return builder.setupRows(rows);
}

