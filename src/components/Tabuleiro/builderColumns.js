import React, { Component } from 'react';

import Torre from '../Torre';
import Cavalo from '../Cavalo';
import Bispo from '../Bispo';
import Rainha from '../Rainha';
import Rei from '../Rei';
import Peao from '../Peao';

const buildColumnA = () => {
  let colunas = new Map();
  colunas.set(8, <Torre cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Torre cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
};

const buildColumnB = () => {
  let colunas = new Map();
  colunas.set(8, <Cavalo cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Cavalo cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}


const buildColumnC = () => {

  let colunas = new Map();
  colunas.set(8, <Bispo cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Bispo cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}

const buildColumnD = () => {

  let colunas = new Map();
  colunas.set(8, <Rainha cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Rainha cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}


const buildColumnE = () => {

  let colunas = new Map();
  colunas.set(8, <Rei cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Rei cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}

const buildColumnF = () => {

  let colunas = new Map();
  colunas.set(8, <Bispo cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Bispo cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}

const buildColumnG = () => {

  let colunas = new Map();
  colunas.set(8, <Cavalo cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Cavalo cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
  return posicoes;
}

const buildColumnH = () => {

  let colunas = new Map();
  colunas.set(8, <Torre cor="preta" />);
  colunas.set(7, <Peao cor="preta" />);
  colunas.set(6, <div></div>);
  colunas.set(5, <div></div>);
  colunas.set(4, <div></div>);
  colunas.set(3, <div></div>);
  colunas.set(2, <Peao cor="branca" />);
  colunas.set(1, <Torre cor="branca" />);

  let posicoes = [
    colunas.get(8),
    colunas.get(7),
    colunas.get(6),
    colunas.get(5),
    colunas.get(4),
    colunas.get(3),
    colunas.get(2),
    colunas.get(1)
  ]
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