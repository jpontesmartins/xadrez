import React from 'react';

import Casa from '../Casa';
import Peca from '../Peca';
import {
  WHITE, BLACK,
  TORRE, PEAO, CAVALO, BISPO, DAMA, REI,
  A, B, C, D, E, F, G, H
} from '../constants';
import builder from "../../store/reducers/builder";

const columnA = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={TORRE} cor={BLACK} coluna={A} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={A} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={A} linha="2" />);
  rows.set(1, <Peca peca={TORRE} cor={WHITE} coluna={A} linha="1" />);
  middleChessboard(rows, A);

  return builder.setupRows(rows);
};

const columnB = () => {
  let rows = new Map();
  rows.set(8, <Peca peca={CAVALO} cor={BLACK} coluna={B} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={B} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={B} linha="2" />);
  rows.set(1, <Peca peca={CAVALO} cor={WHITE} coluna={B} linha="1" />);
  middleChessboard(rows, B);

  return builder.setupRows(rows);
}

const columnC = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={BISPO} cor={BLACK} coluna={C} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={C} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={C} linha="2" />);
  rows.set(1, <Peca peca={BISPO} cor={WHITE} coluna={C} linha="1" />);
  middleChessboard(rows, C);

  return builder.setupRows(rows);
}

const columnD = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={DAMA} cor={BLACK} coluna={D} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={D} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={D} linha="2" />);
  rows.set(1, <Peca peca={DAMA} cor={WHITE} coluna={D} linha="1" />);
  middleChessboard(rows, D);

  return builder.setupRows(rows);
}

const columnE = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={REI} cor={BLACK} coluna={E} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={E} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={E} linha="2" />);
  rows.set(1, <Peca peca={REI} cor={WHITE} coluna={E} linha="1" />);
  middleChessboard(rows, E);

  return builder.setupRows(rows);
}

const columnF = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={BISPO} cor={BLACK} coluna={F} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={F} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={F} linha="2" />);
  rows.set(1, <Peca peca={BISPO} cor={WHITE} coluna={F} linha="1" />);
  middleChessboard(rows, F);

  return builder.setupRows(rows);
}

const columnG = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={CAVALO} cor={BLACK} coluna={G} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={G} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={G} linha="2" />);
  rows.set(1, <Peca peca={CAVALO} cor={WHITE} coluna={G} linha="1" />);
  middleChessboard(rows, G);

  return builder.setupRows(rows);
}

const columnH = () => {
  const rows = new Map();
  rows.set(8, <Peca peca={TORRE} cor={BLACK} coluna={H} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor={BLACK} coluna={H} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor={WHITE} coluna={H} linha="2" />);
  rows.set(1, <Peca peca={TORRE} cor={WHITE} coluna={H} linha="1" />);
  middleChessboard(rows, H);

  return builder.setupRows(rows);
}


const middleChessboard = (rows, column) => {
  rows.set(6, <Casa coluna={column} linha="6" />);
  rows.set(5, <Casa coluna={column} linha="5" />);
  rows.set(4, <Casa coluna={column} linha="4" />);
  rows.set(3, <Casa coluna={column} linha="3" />);
}

export default {
  columnA,
  columnB,
  columnC,
  columnD,
  columnE,
  columnF,
  columnG,
  columnH
}
