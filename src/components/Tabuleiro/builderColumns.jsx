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

const buildColumnB2 = () => {
  //simulacao de movimento de peca... Peao branco sai da B2 para a B3
  //lembrando que a casa da qual a peca saiou tem que ficar vaga..
  const nomeColuna = "B";
  let colunas = new Map();
  colunas.set(8, <Peca peca={CAVALO} cor="preta" coluna={nomeColuna} linha="8" />);
  colunas.set(7, <Peca peca={PEAO} cor="preta" coluna={nomeColuna} linha="7" />);
  colunas.set(6, <Casa coluna={nomeColuna} linha="6" />);
  colunas.set(5, <Casa coluna={nomeColuna} linha="5" />);
  colunas.set(4, <Casa coluna={nomeColuna} linha="4" />);

  colunas.set(3, <Peca peca={PEAO} cor="branca" coluna={nomeColuna} linha="3" />);
  colunas.set(2, <Casa coluna={nomeColuna} linha="2" />);

  colunas.set(1, <Peca peca={CAVALO} cor="branca" coluna={nomeColuna} linha="1" />);

  return posicionarPecas(colunas);
}

const movePieceToColumnB = (casaOrigem, coluna, peca, linha, cor) => {
  const nomeColuna = "B";
  
  const linhaOrigem = parseInt(casaOrigem.split("")[1]);
  console.log("linhaOrigem: " + linhaOrigem);
  
  let linhas = new Map();
  coluna.map((linhaProps, i) => {
    if (linhaProps.props.peca){
      const pecaa = 
        <Peca peca={linhaProps.props.peca}
              cor={linhaProps.props.cor}
              linha={linhaProps.props.linha}></Peca>;

        linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else if (linhaProps.props.coluna) {
      const casaVazia =  <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)}/>;
      linhas.set(parseInt(linhaProps.props.linha), casaVazia);
    }
  });
  const novaPosicaoDaPeca = <Peca peca={peca} cor={cor} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), novaPosicaoDaPeca);

  const pecaVazia = <Casa coluna={nomeColuna} linha="5" />
  linhas.set(linhaOrigem, pecaVazia);

  return posicionarPecas(linhas);
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

let posicionarPecas = linhas => {
  let posicoes = [
    linhas.get(8),
    linhas.get(7),
    linhas.get(6),
    linhas.get(5),
    linhas.get(4),
    linhas.get(3),
    linhas.get(2),
    linhas.get(1)
  ];
  return posicoes;
}

export default {
  buildColumnA,
  buildColumnB,
  buildColumnB2,
  buildColumnC,
  buildColumnD,
  buildColumnE,
  buildColumnF,
  buildColumnG,
  buildColumnH,
  movePieceToColumnB
}