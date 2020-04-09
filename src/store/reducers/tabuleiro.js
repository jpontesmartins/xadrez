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
      const { coluna, linha, peca, cor, casaOrigem } = action.payload;
      const destino = { peca, linha, cor, coluna };
      const colunaOrigem = casaOrigem.split("")[0];
      const colunaDestino = coluna;
      console.log(`Casa origem: ${casaOrigem}`);
      console.log(`Casa destino: ${coluna}${linha}`);

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
    return esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
  }

  if (coluna == colunaAtual) {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor);
  } else {
    return allColumns.get(colunaAtual);
  }
}

