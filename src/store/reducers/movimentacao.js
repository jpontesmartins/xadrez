import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";
import movePieces from '../../components/Tabuleiro/movePieces';

export const movePiece = (payload, state) => {
    const { coluna, linha, peca, cor, casaOrigem } = payload;
    const destino = { peca, linha, cor, coluna };
  
    const colunaOrigem = casaOrigem.split("")[0];
    const colunaDestino = destino.coluna;
  
    if (colunaOrigem === colunaDestino) {
      return {
        ...state,
        colunaA: mesmaColuna(A, casaOrigem, state, destino),
        colunaB: mesmaColuna(B, casaOrigem, state, destino),
        colunaC: mesmaColuna(C, casaOrigem, state, destino),
        colunaD: mesmaColuna(D, casaOrigem, state, destino),
        colunaE: mesmaColuna(E, casaOrigem, state, destino),
        colunaF: mesmaColuna(F, casaOrigem, state, destino),
        colunaG: mesmaColuna(G, casaOrigem, state, destino),
        colunaH: mesmaColuna(H, casaOrigem, state, destino),
      }
    } else {
      return {
        ...state,
        colunaA: colunasDiferentes(A, casaOrigem, state, destino),
        colunaB: colunasDiferentes(B, casaOrigem, state, destino),
        colunaC: colunasDiferentes(C, casaOrigem, state, destino),
        colunaD: colunasDiferentes(D, casaOrigem, state, destino),
        colunaE: colunasDiferentes(E, casaOrigem, state, destino),
        colunaF: colunasDiferentes(F, casaOrigem, state, destino),
        colunaG: colunasDiferentes(G, casaOrigem, state, destino),
        colunaH: colunasDiferentes(H, casaOrigem, state, destino),
      }
    }
  
  }
  
export function mesmaColuna(colunaAtual, casaOrigem, state, destino) {
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
  
  function colunasDiferentes(colunaAtual, casaOrigem, state, destino) {
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
  