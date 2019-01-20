import React, { Component } from 'react';

import Casa from '../Casa';
import Peca from '../Peca';
import { TORRE, PEAO, CAVALO, BISPO, DAMA, REI } from '../constants';

const buildColumnA = () => {
  const nomeColuna = "A";
  let colunas = new Map();
  colunas.set(8, <Peca peca={TORRE} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={TORRE} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
};

const buildColumnB = () => {
  const nomeColuna = "B";
  let colunas = new Map();
  colunas.set(8, <Peca peca={CAVALO} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={CAVALO} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}


const buildColumnC = () => {
  const nomeColuna = "C";

  let colunas = new Map();
  colunas.set(8, <Peca peca={BISPO} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={BISPO} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnD = () => {
  const nomeColuna = "D";

  let colunas = new Map();
  colunas.set(8, <Peca peca={DAMA} peca={DAMA} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={DAMA} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}


const buildColumnE = () => {
  const nomeColuna = "E";

  let colunas = new Map();
  colunas.set(8, <Peca peca={REI} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={REI} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnF = () => {
  const nomeColuna = "F";

  let colunas = new Map();
  colunas.set(8, <Peca peca={BISPO} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={BISPO} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnG = () => {
  const nomeColuna = "G";

  let colunas = new Map();
  colunas.set(8, <Peca peca={CAVALO} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={CAVALO} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnH = () => {
  const nomeColuna = "H";

  let colunas = new Map();
  colunas.set(8, <Peca peca={TORRE} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Peca peca={TORRE} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

let posicionarPecas = colunas => {
  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ];
  return posicoes;
}

export default {
  buildColumnA,
  buildColumnB,
  buildColumnC,
  buildColumnD,
  buildColumnE,
  buildColumnF,
  buildColumnG,
  buildColumnH,
}