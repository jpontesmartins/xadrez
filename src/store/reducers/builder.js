import React from 'react';

import builderColumns from '../../components/Tabuleiro/builderColumns';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

const buildPiece = (linhaProps, nomeColuna) => {
    return <Peca peca={linhaProps.props.peca}
        cor={linhaProps.props.cor} coluna={nomeColuna}
        linha={linhaProps.props.linha}>
    </Peca>;
}

//renomear... setupChessboard,organizeChessboard, setupPosition, organizeRanks
//setupLinePositions, setupPieces
const posicionarPecas = linhas => {
    return [
        linhas.get(8), linhas.get(7), linhas.get(6), linhas.get(5),
        linhas.get(4), linhas.get(3), linhas.get(2), linhas.get(1)
    ];
}

//renomear... getColumns(state)? columns(state)?
const organizarPecas = (state) => {
    let allColumns = new Map();
    allColumns.set(A, state.colunaA);
    allColumns.set(B, state.colunaB);
    allColumns.set(C, state.colunaC);
    allColumns.set(D, state.colunaD);
    allColumns.set(E, state.colunaE);
    allColumns.set(F, state.colunaF);
    allColumns.set(G, state.colunaG);
    allColumns.set(H, state.colunaH);
    return allColumns;
}

const startingPosition = (state) => {
    return {
      ...state,
      colunaA: builderColumns.columnA(),
      colunaB: builderColumns.columnB(),
      colunaC: builderColumns.columnC(),
      colunaD: builderColumns.columnD(),
      colunaE: builderColumns.columnE(),
      colunaF: builderColumns.columnF(),
      colunaG: builderColumns.columnG(),
      colunaH: builderColumns.columnH()
    };
  }

//ChessSet
export default {
    buildPiece,
    posicionarPecas,
    organizarPecas,
    startingPosition
}