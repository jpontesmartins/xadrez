import builderColumns from '../../components/Tabuleiro/builderColumns';
import movePieces from '../../components/Tabuleiro/movePieces';
import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";

const INITIAL_STATE = {
  colunaA: "",
  colunaB: "",
  colunaC: "",
  colunaD: "",
  colunaE: "",
  colunaF: "",
  colunaG: "",
  colunaH: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MONTAR_TABULEIRO':
      return montaTabuleiroInicial(state)
    case 'MOVER_PECA':
      return moveAll(action.payload, state);
    case 'CAPTURAR_PECA':
      return captureAll(action.payload, state);
    default:
      return state
  }
}

const capturePiece = (payload, state) => {
  const casaDaCaptura = payload.casaDaCaptura;
  const pecaDeAtaque = payload.pecaDeAtaque;
  const peca = payload.peca;
  const linha = payload.linha;
  const coluna = payload.coluna;
  const cor = payload.cor;
  const origemAtaque = payload.pecaOrigemAtaque

  const destino = { peca, linha, cor, coluna };

  console.log("CAPTURAA");
  console.log(peca)  //peao
  console.log(linha)  //7
  console.log(coluna)  //A
  console.log(cor)  //preta
  console.log(casaDaCaptura) //A7
  console.log(pecaDeAtaque) //peao, branco
  console.log("origemAtaque");
  console.log(origemAtaque);

  const colunaDestino = destino.coluna;
  const colunaOrigem = origemAtaque.coluna;
  console.log("captureAll");
  console.log(colunaDestino);
  console.log(colunaOrigem);

  if (colunaOrigem == colunaDestino) {
    return {
      ...state,
      colunaA: capture(A, origemAtaque, state, destino),
      colunaB: capture(B, origemAtaque, state, destino),
      colunaC: capture(C, origemAtaque, state, destino),
      colunaD: capture(D, origemAtaque, state, destino),
      colunaE: capture(E, origemAtaque, state, destino),
      colunaF: capture(F, origemAtaque, state, destino),
      colunaG: capture(G, origemAtaque, state, destino),
      colunaH: capture(H, origemAtaque, state, destino),
    }
  } else {
    const casaOrigem = origemAtaque.coluna + "" + origemAtaque.linha;
    return moveAll(casaOrigem, state, destino);
  }

}

const capture = (colunaAtual, origemAtaque, state, destino) => {
  const colunaDestino = destino.coluna;
  if (colunaAtual == colunaDestino) {
    const allColumns = organizarPecas(state);
    return movePieces.capturaPeca(origemAtaque, allColumns.get(destino.coluna), destino);
  } else {
    const casaDaCaptura = destino.coluna + "" + destino.linha;
    return move(colunaAtual, casaDaCaptura, state, destino);
  }
}

const captureAll = (payload, state) => {
  return capturePiece(payload, state);
}





const moveAll = (payload, state) => {
  const { coluna, linha, peca, cor, casaOrigem } = payload;
  const destino = { peca, linha, cor, coluna };

  console.log(`Casa origem: ${casaOrigem}`);
  console.log(`Casa destino: ${destino.coluna}${destino.linha}`);

  const colunaOrigem = casaOrigem.split("")[0];
  const colunaDestino = destino.coluna;

  if (colunaOrigem === colunaDestino) {
    return {
      ...state,
      colunaA: move(A, casaOrigem, state, destino),
      colunaB: move(B, casaOrigem, state, destino),
      colunaC: move(C, casaOrigem, state, destino),
      colunaD: move(D, casaOrigem, state, destino),
      colunaE: move(E, casaOrigem, state, destino),
      colunaF: move(F, casaOrigem, state, destino),
      colunaG: move(G, casaOrigem, state, destino),
      colunaH: move(H, casaOrigem, state, destino),
    }
  } else {
    return {
      ...state,
      colunaA: movimentacao(A, casaOrigem, state, destino),
      colunaB: movimentacao(B, casaOrigem, state, destino),
      colunaC: movimentacao(C, casaOrigem, state, destino),
      colunaD: movimentacao(D, casaOrigem, state, destino),
      colunaE: movimentacao(E, casaOrigem, state, destino),
      colunaF: movimentacao(F, casaOrigem, state, destino),
      colunaG: movimentacao(G, casaOrigem, state, destino),
      colunaH: movimentacao(H, casaOrigem, state, destino),
    }
  }

}


function move(colunaAtual, casaOrigem, state, destino) {
  const { coluna } = destino;
  const colunaDestino = coluna;
  const allColumns = organizarPecas(state);

  if (colunaDestino == colunaAtual) {
    const colunaOrigem = casaOrigem.split("")[0];
    return movePieces.movePieceToTheSameColumn(casaOrigem, allColumns.get(colunaOrigem), destino);
  } else {
    return allColumns.get(colunaAtual);
  }

}

function movimentacao(colunaAtual, casaOrigem, state, destino) {
  const { peca, linha, cor, coluna } = destino
  const allColumns = organizarPecas(state);

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == colunaAtual) {
    return movePieces.esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
  }

  if (coluna == colunaAtual) {
    return movePieces.movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor);
  } else {
    return allColumns.get(colunaAtual);
  }
}





function montaTabuleiroInicial(state) {
  return {
    ...state,
    colunaA: builderColumns.buildColumnA(),
    colunaB: builderColumns.buildColumnB(),
    colunaC: builderColumns.buildColumnC(),
    colunaD: builderColumns.buildColumnD(),
    colunaE: builderColumns.buildColumnE(),
    colunaF: builderColumns.buildColumnF(),
    colunaG: builderColumns.buildColumnG(),
    colunaH: builderColumns.buildColumnH()
  };
}