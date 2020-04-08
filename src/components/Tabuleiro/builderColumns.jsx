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


const vaziaCasaDaPecaMovimentada = (casaOrigem, allColumns) => {
  console.log("esvaziar: " + casaOrigem);
  const nomeColuna = casaOrigem.split("")[0];
  const linhaOrigem = parseInt(casaOrigem.split("")[1]);
  console.log(allColumns.get(nomeColuna));
  //duplicando para retornar...
  const novaColuna = new Map();
  allColumns.get(nomeColuna).map((linhaProps, i) => {
    if (linhaProps.props.peca) {
      const pecaa =
        <Peca peca={linhaProps.props.peca}
          cor={linhaProps.props.cor}
          coluna={nomeColuna}
          linha={linhaProps.props.linha}></Peca>;
      novaColuna.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
        novaColuna.set(parseInt(linhaProps.props.linha), casaVazia);
    }

  });

  const pecaVazia = <Casa coluna={nomeColuna} linha={linhaOrigem} />
  novaColuna.set(linhaOrigem, pecaVazia);
  console.log("novaColuna");
  console.log(novaColuna);

  return posicionarPecas(novaColuna);

}

const movePieceToTheSameColumn = (casaOrigem, colunaCompleta, peca, linha, cor) => {
  const linhaOrigem = parseInt(casaOrigem.split("")[1]);
  const nomeColuna = casaOrigem.split("")[0];//"B";

  console.log("linhaOrigem: " + linhaOrigem);
  console.log(colunaCompleta);

  let linhas = new Map();
  colunaCompleta.map((linhaProps, i) => {
    // console.log | ("linhaProps");
    // console.log | (linhaProps);
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
  console.log("movePieceToAnotherColumn");
  console.log("casa origem: " + casaOrigem);
  console.log(colunaCompleta);
  console.log("peca: " + peca);
  console.log("linha da peca: " + linha);
  console.log("coluna destino: " + nomeColuna);
  console.log("cor da peca: " + cor);
  const linhaOrigem = parseInt(casaOrigem.split("")[1]);

  let linhas = new Map();
  colunaCompleta.map((linhaProps, i) => {

    if (linhaProps.props.peca) {
      // console.log(linhaProps.props);
      const pecaa = <Peca peca={linhaProps.props.peca}
        cor={linhaProps.props.cor}
        coluna={nomeColuna}
        linha={linhaProps.props.linha}></Peca>;

      linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      // console.log(linhaProps.props);
      const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
      linhas.set(parseInt(linhaProps.props.linha), casaVazia);

    }
  });

  const novaPosicaoDaPeca =
    <Peca peca={peca} cor={cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
  linhas.set(parseInt(linha), novaPosicaoDaPeca);

  // const pecaVazia = <Casa coluna={nomeColuna} linha={linhaOrigem} />
  // linhas.set(linhaOrigem, pecaVazia);

  console.log(linhas);

  return posicionarPecas(linhas);
  // return "";
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
  buildColumnC,
  buildColumnD,
  buildColumnE,
  buildColumnF,
  buildColumnG,
  buildColumnH,
  movePieceToTheSameColumn,
  movePieceToAnotherColumn,
  vaziaCasaDaPecaMovimentada
}