import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";

export const movePiece = (payload, state) => {
  const { coluna, linha, peca, cor, casaOrigem } = payload;
  const destino = { peca, linha, cor, coluna };

  const colunaOrigem = casaOrigem.split("")[0];
  const colunaDestino = destino.coluna;

  if (colunaOrigem === colunaDestino) {
    return {
      ...state,
      colunaA: mesmaColuna(A, casaOrigem, state, destino),
      colunaB: mesmaColuna(B, casaOrigem, state, destino),
      colunaC: mesmaColuna(C, casaOrigem, state, destino),
      colunaD: mesmaColuna(D, casaOrigem, state, destino),
      colunaE: mesmaColuna(E, casaOrigem, state, destino),
      colunaF: mesmaColuna(F, casaOrigem, state, destino),
      colunaG: mesmaColuna(G, casaOrigem, state, destino),
      colunaH: mesmaColuna(H, casaOrigem, state, destino),
    }
  } else {
    return {
      ...state,
      colunaA: colunasDiferentes(A, casaOrigem, state, destino),
      colunaB: colunasDiferentes(B, casaOrigem, state, destino),
      colunaC: colunasDiferentes(C, casaOrigem, state, destino),
      colunaD: colunasDiferentes(D, casaOrigem, state, destino),
      colunaE: colunasDiferentes(E, casaOrigem, state, destino),
      colunaF: colunasDiferentes(F, casaOrigem, state, destino),
      colunaG: colunasDiferentes(G, casaOrigem, state, destino),
      colunaH: colunasDiferentes(H, casaOrigem, state, destino),
    }
  }

}

export const mesmaColuna = (colunaAtual, casaOrigem, state, destino) => {
  const allColumns = organizarPecas(state);
  const colunaOrigem = casaOrigem.split("")[0];

  if (colunaAtual == destino.coluna) {
    return movePieceToTheSameColumn(casaOrigem, allColumns.get(colunaOrigem), destino);
  } else {
    return allColumns.get(colunaAtual);
  }

}

export const colunasDiferentes = (colunaAtual, casaOrigem, state, destino) => {
  const { peca, linha, cor, coluna } = destino;
  const allColumns = organizarPecas(state);
  const colunaOrigem = casaOrigem.split("")[0];

  if (colunaAtual == colunaOrigem) {
    return esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
  }

  if (coluna == colunaAtual) {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor);
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

const esvaziaCasaDaPecaMovimentada = (casaOrigem, allColumns) => {
  const nomeColuna = casaOrigem.split("")[0];
  const linhaOrigem = parseInt(casaOrigem.split("")[1]);
  const novaColuna = new Map();
  allColumns.get(nomeColuna).map((linhaProps, i) => {
    if (linhaProps.props.peca) {
      const pecaa = buildPiece(linhaProps, nomeColuna);
      novaColuna.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
      novaColuna.set(parseInt(linhaProps.props.linha), casaVazia);
    }

  });

  const pecaVazia = <Casa coluna={nomeColuna} linha={linhaOrigem} />
  novaColuna.set(linhaOrigem, pecaVazia);

  return posicionarPecas(novaColuna);

}


const movePieceToTheSameColumn = (casaOrigem, colunaCompleta, destino) => {
  const { peca, linha, cor } = destino;

  const linhaOrigem = parseInt(casaOrigem.split("")[1]);
  const nomeColuna = casaOrigem.split("")[0];

  let linhas = new Map();
  colunaCompleta.map((linhaProps, i) => {
    if (linhaProps.props.peca) {
      const pecaa =
        <Peca peca={linhaProps.props.peca}
          cor={linhaProps.props.cor}
          coluna={nomeColuna}
          linha={linhaProps.props.linha}></Peca>;

      linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else if (linhaProps.props.coluna) {
      const casaVazia =
        <Casa
          coluna={nomeColuna}
          linha={parseInt(linhaProps.props.linha)} />;
      linhas.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });

  const novaPosicaoDaPeca =
    <Peca peca={peca} cor={cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), novaPosicaoDaPeca);

  const pecaVazia = <Casa coluna={nomeColuna} linha={linhaOrigem} />
  linhas.set(linhaOrigem, pecaVazia);

  return posicionarPecas(linhas);
}




const movePieceToAnotherColumn = (casaOrigem, nomeColuna, colunaCompleta, peca, linha, cor) => {

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

  const novaPosicaoDaPeca =
    <Peca peca={peca} cor={cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), novaPosicaoDaPeca);

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
