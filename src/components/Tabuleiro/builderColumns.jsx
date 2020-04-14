import React from 'react';

import Casa from '../Casa';
import Peca from '../Peca';
import { TORRE, PEAO, CAVALO, BISPO, DAMA, REI, A, B, C, D, E, F, G, H } from '../constants';

import builder from "../../store/reducers/builder";

const columnA = () => {
  const column = A;
  const rows = new Map();

  rows.set(8, <Peca peca={TORRE} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={TORRE} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
};

const columnB = () => {
  const column = B;
  let rows = new Map();
  rows.set(8, <Peca peca={CAVALO} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={CAVALO} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}

const columnC = () => {
  const column = C;
  const rows = new Map();

  rows.set(8, <Peca peca={BISPO} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={BISPO} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}

const columnD = () => {
  const column = D;
  const rows = new Map();

  rows.set(8, <Peca peca={DAMA} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={DAMA} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}


const columnE = () => {
  const column = E;
  const rows = new Map();

  rows.set(8, <Peca peca={REI} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={REI} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}

const columnF = () => {
  const column = F;
  const rows = new Map();

  rows.set(8, <Peca peca={BISPO} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={BISPO} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}

const columnG = () => {
  const column = G;
  const rows = new Map();

  rows.set(8, <Peca peca={CAVALO} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={CAVALO} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

  return builder.setupRows(rows);
}

const columnH = () => {
  const column = H;
  const rows = new Map();

  rows.set(8, <Peca peca={TORRE} cor="preta" coluna={column} linha="8" />);
  rows.set(7, <Peca peca={PEAO} cor="preta" coluna={column} linha="7" />);
  rows.set(2, <Peca peca={PEAO} cor="branca" coluna={column} linha="2" />);
  rows.set(1, <Peca peca={TORRE} cor="branca" coluna={column} linha="1" />);
  middleChessboard(rows, column);

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
