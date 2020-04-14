import React from 'react';

import builderColumns from '../../components/Tabuleiro/builderColumns';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

const buildPiece = (pecaCompleta) => {
    const { peca, cor, coluna, linha } = pecaCompleta;
    return <Peca peca={peca} cor={cor} coluna={coluna} linha={linha}> </Peca>;
}

const setupRows = linhas => {
    return [
        linhas.get(8), linhas.get(7), linhas.get(6), linhas.get(5),
        linhas.get(4), linhas.get(3), linhas.get(2), linhas.get(1)
    ];
}

const setupColumns = (state) => {
    let columns = new Map();
    columns.set(A, state.colunaA);
    columns.set(B, state.colunaB);
    columns.set(C, state.colunaC);
    columns.set(D, state.colunaD);
    columns.set(E, state.colunaE);
    columns.set(F, state.colunaF);
    columns.set(G, state.colunaG);
    columns.set(H, state.colunaH);
    return columns;
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
    setupRows,
    setupColumns,
    startingPosition
}