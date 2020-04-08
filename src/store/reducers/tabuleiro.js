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
      }
    case 'MOVER_PECA':
      let allColumns = organizarPecas(state);
      const { coluna, linha, peca, cor, casaOrigem } = action.payload;
      const destino = { peca, linha, cor };
      const colunaOrigem = casaOrigem.split("")[0];
      const colunaDestino = coluna;
      console.log(`Casa origem: ${casaOrigem}`);
      console.log(`Casa destino: ${coluna}${linha}`);

      if (colunaOrigem === colunaDestino) {
        return {
          ...state,
          colunaA: (colunaDestino == A ? movePiece(casaOrigem, state, destino) : state.colunaA),
          colunaB: (colunaDestino == B ? movePiece(casaOrigem, state, destino) : state.colunaB),
          colunaC: (colunaDestino == C ? movePiece(casaOrigem, state, destino) : state.colunaC),
          colunaD: (colunaDestino == D ? movePiece(casaOrigem, state, destino) : state.colunaD),
          colunaE: (colunaDestino == E ? movePiece(casaOrigem, state, destino) : state.colunaE),
          colunaF: (colunaDestino == F ? movePiece(casaOrigem, state, destino) : state.colunaF),
          colunaG: (colunaDestino == G ? movePiece(casaOrigem, state, destino) : state.colunaG),
          colunaH: (colunaDestino == H ? movePiece(casaOrigem, state, destino) : state.colunaH),
        }
      } else {

        return {
          ...state,
          colunaA: movimentacao(A, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaB: movimentacao(B, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaC: movimentacao(C, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaD: movimentacao(D, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaE: movimentacao(E, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaF: movimentacao(F, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaG: movimentacao(G, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),
          colunaH: movimentacao(H, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor),

        }
      }
    default:
      return state
  }
}


const esvaziaCasaDaPecaMovimentada = (casaOrigem, allColumns) => {
  return movePieces.esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
}

const movePieceToAnotherColumn = (casaOrigem, coluna, colunaCompleta, peca, linha, cor) => {
  return movePieces.movePieceToAnotherColumn(casaOrigem, coluna, colunaCompleta, peca, linha, cor);
}

const movePiece = (casaOrigem, state, peca, linha, cor) => {
  const colunaOrigem = casaOrigem.split("")[0];
  const colunaCompleta = organizarPecas(state).get(colunaOrigem);

  return movePieces.movePieceToTheSameColumn(casaOrigem, colunaCompleta, peca, linha, cor);
}

function movimentacao(colunaAtual, colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor) {

  if (colunaAtual == "A") {
    console.log("Movimentacao");
    console.log("colunaAtual:" + colunaAtual);
    console.log("colunaDestino: " + colunaDestino);
    console.log("casaOrigem: " + casaOrigem);
    console.log("coluna: " + coluna);
    console.log(allColumns);
    console.log(peca);
    console.log(linha);
    console.log(cor);
  }

  const destinoCompleto = {
    peca: peca,
    cor: cor,
    coluna: colunaDestino,
    linha: linha
  }

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == colunaAtual) {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == colunaAtual) {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor);
  } else {
    return allColumns.get(colunaAtual);
  }
}


