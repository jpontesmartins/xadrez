import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";
import movePieces from '../../components/Tabuleiro/movePieces';
import { moveAll, move } from "./movimentacao.js";



export const capturePiece = (payload, state) => {
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

export const capture = (colunaAtual, origemAtaque, state, destino) => {
    const colunaDestino = destino.coluna;
    if (colunaAtual == colunaDestino) {
        const allColumns = organizarPecas(state);
        return movePieces.capturaPeca(origemAtaque, allColumns.get(destino.coluna), destino);
    } else {
        const casaDaCaptura = destino.coluna + "" + destino.linha;
        return move(colunaAtual, casaDaCaptura, state, destino);
    }
}

export const captureAll = (payload, state) => {
    return capturePiece(payload, state);
}