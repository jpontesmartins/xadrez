import React, { Component } from 'react';

import Casa from '../Casa';
import Peca from '../Peca';
import { TORRE, PEAO, CAVALO, BISPO, DAMA, REI } from '../constants';

const capturaPeca = (origemAtaque, colunaCompleta, destino) => {
  const pecaDeAtaque = {
    peca: origemAtaque.pecaSelecionada,
    cor: origemAtaque.cor
  };

  const nomeColuna = destino.coluna;

  let linhas = new Map();
  colunaCompleta.map((linhaProps, i) => {
    if (linhaProps.props.peca) {
      const pecaa = buildPiece(linhaProps, nomeColuna);
      linhas.set(parseInt(linhaProps.props.linha), pecaa);
    } else {
      const casaVazia = <Casa
        coluna={nomeColuna}
        linha={parseInt(linhaProps.props.linha)} />;

      linhas.set(parseInt(linhaProps.props.linha), casaVazia);
    }

  });

  const linha = destino.linha;
  const novaPosicaoDaPeca = <Peca peca={pecaDeAtaque.peca}
    cor={pecaDeAtaque.cor} coluna={nomeColuna}
    linha={parseInt(linha)}></Peca>;

  linhas.set(parseInt(linha), novaPosicaoDaPeca);

  const pecaVazia = <Casa 
    coluna={nomeColuna}
    linha={parseInt(origemAtaque.linha)} />

  console.log(pecaVazia)
  linhas.set(parseInt(origemAtaque.linha), pecaVazia);

  return posicionarPecas(linhas);
}

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
  movePieceToTheSameColumn,
  movePieceToAnotherColumn,
  esvaziaCasaDaPecaMovimentada,
  capturaPeca
}

function buildPiece(linhaProps, nomeColuna) {
  return <Peca peca={linhaProps.props.peca}
    cor={linhaProps.props.cor} coluna={nomeColuna}
    linha={linhaProps.props.linha}>
  </Peca>;
}
