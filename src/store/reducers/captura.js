import React from 'react';

import Casa from '../../components/Casa';
import Peca from '../../components/Peca';

import { A, B, C, D, E, F, G, H } from "../../components/constants";
import { sameColumn as moveAtSameColumn } from "./movimentacao.js";

import builder from "./builder";

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
    const allColumns = builder.setupColumns(state);
    const casaDeOrigem = origem.coluna + "" + origem.linha;
    const casaDaCaptura = destino.coluna + "" + destino.linha;

    if (colunaAtual == origem.coluna) {
        return esvaziaCasaDaPecaMovimentada(casaDeOrigem, allColumns);
    }

    if (colunaAtual == destino.coluna) {
        return capturaPecaColunasDiferentes(origem, allColumns.get(destino.coluna), destino);
    } else {
        return moveAtSameColumn(colunaAtual, casaDaCaptura, state, destino);
    }
}

export const mesmaColuna = (colunaAtual, origem, state, destino) => {
    const allColumns =  builder.setupColumns(state);
    const casaDaCaptura = destino.coluna + "" + destino.linha;

    if (colunaAtual == destino.coluna) {
        return capturaPecaMesmaColuna(origem, allColumns.get(destino.coluna), destino);
    } else {
        return moveAtSameColumn(colunaAtual, casaDaCaptura, state, destino);
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
        console.log("linhaProps");
        console.log(linhaProps.props);
        const pecaCompleta = linhaProps.props;

        if (linhaProps.props.peca) {
            const pecaa = builder.buildPiece(pecaCompleta);
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

    return builder.setupRows(linhas);
}

const capturaPecaColunasDiferentes = (origem, colunaCompleta, destino) => {
    const pecaDeAtaque = {
        peca: origem.pecaSelecionada,
        cor: origem.cor
    };

    const nomeColuna = destino.coluna;

    let linhas = new Map();
    colunaCompleta.map((linhaProps, i) => {
        const pecaCompleta = linhaProps.props;

        if (linhaProps.props.peca) {
            const pecaa = builder.buildPiece(pecaCompleta);
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
    return builder.setupRows(linhas);
}


const esvaziaCasaDaPecaMovimentada = (casaOrigem, allColumns) => {
    const nomeColuna = casaOrigem.split("")[0];
    const linhaOrigem = parseInt(casaOrigem.split("")[1]);
    const novaColuna = new Map();
    allColumns.get(nomeColuna).map((linhaProps, i) => {
        const pecaCompleta = linhaProps.props;

        if (linhaProps.props.peca) {
            const pecaa = builder.buildPiece(pecaCompleta);
            novaColuna.set(parseInt(linhaProps.props.linha), pecaa);
        } else {
            const casaVazia = <Casa coluna={nomeColuna} linha={parseInt(linhaProps.props.linha)} />;
            novaColuna.set(parseInt(linhaProps.props.linha), casaVazia);
        }
    });

    const pecaVazia = <Casa coluna={nomeColuna} linha={linhaOrigem} />
    novaColuna.set(linhaOrigem, pecaVazia);

    return builder.setupRows(novaColuna);
}

