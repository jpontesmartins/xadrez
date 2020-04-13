import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { organizarPecas } from "../../components/Tabuleiro/columns";
import { mesmaColuna as movimentarNaMesmaColuna } from "./movimentacao.js";

export const capturePiece = (payload, state) => {
    const { peca, linha, coluna, cor } = payload;
    const origem = payload.pecaOrigemAtaque
    const destino = { peca, linha, cor, coluna };

    if (origem.coluna == destino.coluna) {
        return {
            ...state,
            colunaA: mesmaColuna(A, origem, state, destino),
            colunaB: mesmaColuna(B, origem, state, destino),
            colunaC: mesmaColuna(C, origem, state, destino),
            colunaD: mesmaColuna(D, origem, state, destino),
            colunaE: mesmaColuna(E, origem, state, destino),
            colunaF: mesmaColuna(F, origem, state, destino),
            colunaG: mesmaColuna(G, origem, state, destino),
            colunaH: mesmaColuna(H, origem, state, destino),
        }
    } else {
        return {
            ...state,
            colunaA: colunasDiferentes(A, origem, state, destino),
            colunaB: colunasDiferentes(B, origem, state, destino),
            colunaC: colunasDiferentes(C, origem, state, destino),
            colunaD: colunasDiferentes(D, origem, state, destino),
            colunaE: colunasDiferentes(E, origem, state, destino),
            colunaF: colunasDiferentes(F, origem, state, destino),
            colunaG: colunasDiferentes(G, origem, state, destino),
            colunaH: colunasDiferentes(H, origem, state, destino),
        }
    }
}

export const colunasDiferentes = (colunaAtual, origem, state, destino) => {
    const allColumns = organizarPecas(state);
    const casaDeOrigem = origem.coluna + "" + origem.linha;
    const casaDaCaptura = destino.coluna + "" + destino.linha;

    if (colunaAtual == origem.coluna) {
        return esvaziaCasaDaPecaMovimentada(casaDeOrigem, allColumns);
    }

    if (colunaAtual == destino.coluna) {
        return capturaPecaColunasDiferentes(origem, allColumns.get(destino.coluna), destino);
    } else {
        return movimentarNaMesmaColuna(colunaAtual, casaDaCaptura, state, destino);
    }
}

export const mesmaColuna = (colunaAtual, origem, state, destino) => {
    const allColumns = organizarPecas(state);
    const casaDaCaptura = destino.coluna + "" + destino.linha;

    if (colunaAtual == destino.coluna) {
        return capturaPecaMesmaColuna(origem, allColumns.get(destino.coluna), destino);
    } else {
        return movimentarNaMesmaColuna(colunaAtual, casaDaCaptura, state, destino);
    }
}

/**
 * 
 * 
 * 
 * 
 * 
 */



const capturaPecaMesmaColuna = (origem, colunaCompleta, destino) => {
    const pecaDeAtaque = {
        peca: origem.pecaSelecionada,
        cor: origem.cor
    };

    const nomeColuna = origem.coluna;

    let linhas = new Map();
    colunaCompleta.map((linhaProps, i) => {
        if (linhaProps.props.peca) {
            const pecaa = buildPiece(linhaProps, nomeColuna);
            linhas.set(parseInt(linhaProps.props.linha), pecaa);
        } else {
            const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
            linhas.set(parseInt(linhaProps.props.linha), casaVazia);
        }
    });

    const linha = destino.linha;
    const novaPosicaoDaPeca = <Peca peca={pecaDeAtaque.peca} cor={pecaDeAtaque.cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
    linhas.set(parseInt(linha), novaPosicaoDaPeca);

    const pecaVazia = <Casa
        coluna={origem.coluna}
        linha={parseInt(origem.linha)} />
    linhas.set(parseInt(origem.linha), pecaVazia);

    return posicionarPecas(linhas);
}

const capturaPecaColunasDiferentes = (origem, colunaCompleta, destino) => {
    const pecaDeAtaque = {
        peca: origem.pecaSelecionada,
        cor: origem.cor
    };

    const nomeColuna = destino.coluna;

    let linhas = new Map();
    colunaCompleta.map((linhaProps, i) => {
        if (linhaProps.props.peca) {
            const pecaa = buildPiece(linhaProps, nomeColuna);
            linhas.set(parseInt(linhaProps.props.linha), pecaa);
        } else {
            const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
            linhas.set(parseInt(linhaProps.props.linha), casaVazia);
        }
    });

    const linha = destino.linha;
    const novaPosicaoDaPeca = <Peca peca={pecaDeAtaque.peca}
        cor={pecaDeAtaque.cor} coluna={nomeColuna} linha={parseInt(linha)}></Peca>;
    linhas.set(parseInt(linha), novaPosicaoDaPeca);
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


function buildPiece(linhaProps, nomeColuna) {
    return <Peca peca={linhaProps.props.peca}
        cor={linhaProps.props.cor} coluna={nomeColuna}
        linha={linhaProps.props.linha}>
    </Peca>;
}

let posicionarPecas = linhas => {
    return [
        linhas.get(8), linhas.get(7), linhas.get(6), linhas.get(5),
        linhas.get(4), linhas.get(3), linhas.get(2), linhas.get(1)
    ];
}
