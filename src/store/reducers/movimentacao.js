import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";

import builder from "./builder";

export const movePiece = (payload, state) => {
  const { coluna, linha, peca, cor, squareOrigin } = payload;
  const target = { peca, linha, cor, coluna };
  const origin = {
    linha: squareOrigin.split("")[1], 
    coluna: squareOrigin.split("")[0] 
  }

  if (origin.coluna === target.coluna) {
    return {
      ...state,
      colunaA: sameColumn(A, origin, state, target),
      colunaB: sameColumn(B, origin, state, target),
      colunaC: sameColumn(C, origin, state, target),
      colunaD: sameColumn(D, origin, state, target),
      colunaE: sameColumn(E, origin, state, target),
      colunaF: sameColumn(F, origin, state, target),
      colunaG: sameColumn(G, origin, state, target),
      colunaH: sameColumn(H, origin, state, target),
    }
  } else {
    return {
      ...state,
      colunaA: differentColumns(A, origin, state, target),
      colunaB: differentColumns(B, origin, state, target),
      colunaC: differentColumns(C, origin, state, target),
      colunaD: differentColumns(D, origin, state, target),
      colunaE: differentColumns(E, origin, state, target),
      colunaF: differentColumns(F, origin, state, target),
      colunaG: differentColumns(G, origin, state, target),
      colunaH: differentColumns(H, origin, state, target),
    }
  }

}

export const sameColumn = (currentColumn, origem, state, destino) => {
  const columns = builder.setupColumns(state);

  if (currentColumn == destino.coluna) {
    return movePieceToTheSameColumn(origem, columns.get(origem.coluna), destino);
  } else {
    return columns.get(currentColumn);
  }

}

export const differentColumns = (currentColumn, origem, state, destino) => {
  const columns = builder.setupColumns(state);
  const { peca, linha, cor, coluna } = destino;

  if (currentColumn == origem.coluna) {
    return cleanSquare(origem, columns);
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

const cleanSquare = (origin, columns) => {
  const rows = new Map();
  columns.get(origin.coluna).map((linhaProps) => {
    if (linhaProps.props.peca) {
      rows.set(parseInt(linhaProps.props.linha), builder.buildPiece(linhaProps.props));
    } else {
      const emptySquare = builder.buildSquare(origin.coluna, linhaProps.props.linha);
      rows.set(parseInt(linhaProps.props.linha), emptySquare);
    }
  });

  const emptySquare = builder.buildSquare(origin.coluna, origin.linha);
  rows.set(parseInt(origin.linha), emptySquare);

  return builder.setupRows(rows);
}

const movePieceToTheSameColumn = (origem, colunaCompleta, destino) => {
  const { peca, linha, cor } = destino;

  let rows = new Map();
  colunaCompleta.map((linhaProps) => {
    if (linhaProps.props.peca) {
      rows.set(parseInt(linhaProps.props.linha), builder.buildPiece(linhaProps.props));
    } else {
      const emptySquare = <Casa coluna={origem.coluna} linha={parseInt(linhaProps.props.linha)} />;
      rows.set(parseInt(linhaProps.props.linha), emptySquare);
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

