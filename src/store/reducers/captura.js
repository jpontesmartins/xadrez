import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";
import movePieces from '../../components/Tabuleiro/movePieces';
import { mesmaColuna as movimentarNaMesmaColuna } from "./movimentacao.js";

export const capturePiece = (payload, state) => {
    const { peca, linha, coluna, cor } = payload;
    const origemAtaque = payload.pecaOrigemAtaque
    const destino = { peca, linha, cor, coluna };

    const colunaDestino = destino.coluna;
    const colunaOrigem = origemAtaque.coluna;

    if (colunaOrigem == colunaDestino) {
        return {
            ...state,
            colunaA: mesmaColuna(A, origemAtaque, state, destino),
            colunaB: mesmaColuna(B, origemAtaque, state, destino),
            colunaC: mesmaColuna(C, origemAtaque, state, destino),
            colunaD: mesmaColuna(D, origemAtaque, state, destino),
            colunaE: mesmaColuna(E, origemAtaque, state, destino),
            colunaF: mesmaColuna(F, origemAtaque, state, destino),
            colunaG: mesmaColuna(G, origemAtaque, state, destino),
            colunaH: mesmaColuna(H, origemAtaque, state, destino),
        }
    } else {
        return {
            ...state,
            colunaA: colunasDiferentes(A, origemAtaque, state, destino),
            colunaB: colunasDiferentes(B, origemAtaque, state, destino),
            colunaC: colunasDiferentes(C, origemAtaque, state, destino),
            colunaD: colunasDiferentes(D, origemAtaque, state, destino),
            colunaE: colunasDiferentes(E, origemAtaque, state, destino),
            colunaF: colunasDiferentes(F, origemAtaque, state, destino),
            colunaG: colunasDiferentes(G, origemAtaque, state, destino),
            colunaH: colunasDiferentes(H, origemAtaque, state, destino),
        }
    }
}

export const colunasDiferentes = (colunaAtual, origemAtaque, state, destino) => {
    const colunaDestino = destino.coluna;
    const allColumns = organizarPecas(state);
    const colunaOrigem = origemAtaque.coluna;
    const casaOrigem = origemAtaque.coluna + "" + origemAtaque.linha;
    if (colunaOrigem == colunaAtual) {
      return movePieces.esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    }

    if (colunaAtual == colunaDestino) {
        return movePieces.capturaPecaColunasDiferentes(origemAtaque, allColumns.get(destino.coluna), destino);
    } else {
        const casaDaCaptura = destino.coluna + "" + destino.linha;
        return movimentarNaMesmaColuna(colunaAtual, casaDaCaptura, state, destino);
    }
}

export const mesmaColuna = (colunaAtual, origemAtaque, state, destino) => {
    const colunaDestino = destino.coluna;
    if (colunaAtual == colunaDestino) {
        const allColumns = organizarPecas(state);
        return movePieces.capturaPecaMesmaColuna(origemAtaque, allColumns.get(destino.coluna), destino);
    } else {
        const casaDaCaptura = destino.coluna + "" + destino.linha;
        return movimentarNaMesmaColuna(colunaAtual, casaDaCaptura, state, destino);
    }
}
