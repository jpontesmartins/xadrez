import React, { Component } from 'react';

import Torre from '../Torre';
import Cavalo from '../Cavalo';
import Bispo from '../Bispo';
import Rainha from '../Rainha';
import Rei from '../Rei';
import Peao from '../Peao';
import Casa from '../Casa';

const buildColumnA = () => {
  const nomeColuna = "A";
  let colunas = new Map();
  colunas.set(8, <Torre cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Torre cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
};

const buildColumnB = () => {
  const nomeColuna = "B";
  let colunas = new Map();
  colunas.set(8, <Cavalo cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Cavalo cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}


const buildColumnC = () => {
  const nomeColuna = "C";

  let colunas = new Map();
  colunas.set(8, <Bispo cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Bispo cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnD = () => {
  const nomeColuna = "D";

  let colunas = new Map();
  colunas.set(8, <Rainha cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Rainha cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}


const buildColumnE = () => {
  const nomeColuna = "E";

  let colunas = new Map();
  colunas.set(8, <Rei cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Rei cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnF = () => {
  const nomeColuna = "F";

  let colunas = new Map();
  colunas.set(8, <Bispo cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Bispo cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnG = () => {
  const nomeColuna = "G";

  let colunas = new Map();
  colunas.set(8, <Cavalo cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Cavalo cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const buildColumnH = () => {
  const nomeColuna = "H";

  let colunas = new Map();
  colunas.set(8, <Torre cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peao cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);
  colunas.set(3, <Casa coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Peao cor="branca" coluna={nomeColuna} linha="2" />);
  colunas.set(1, <Torre cor="branca" coluna={nomeColuna} linha="1" />);

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