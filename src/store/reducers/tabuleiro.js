import builderColumns from '../../components/Tabuleiro/builderColumns';
import { A, B, C, D, E, F, G, H } from "../../components/constants";

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
      let allColumns = new Map();
      allColumns.set(A, state.colunaA);
      allColumns.set(B, state.colunaB);
      allColumns.set(C, state.colunaC);
      allColumns.set(D, state.colunaD);
      allColumns.set(E, state.colunaE);
      allColumns.set(F, state.colunaF);
      allColumns.set(G, state.colunaG);
      allColumns.set(H, state.colunaH);

      const { coluna, linha, peca, cor, casaOrigem } = action.payload;

      const colunaOrigem = casaOrigem.split("")[0];
      const colunaDestino = coluna;
      console.log(`Casa origem: ${casaOrigem}`);
      console.log(`Casa destino: ${coluna}${linha}`);

      if (colunaOrigem === colunaDestino) {
        return {
          ...state,
          colunaA: (colunaDestino == A ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaA),
          colunaB: (colunaDestino == B ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaB),
          colunaC: (colunaDestino == C ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaC),
          colunaD: (colunaDestino == D ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaD),
          colunaE: (colunaDestino == E ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaE),
          colunaF: (colunaDestino == F ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaF),
          colunaG: (colunaDestino == G ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaG),
          colunaH: (colunaDestino == H ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaH),
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
 return builderColumns.vaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
}

const movePieceToAnotherColumn = (casaOrigem, coluna, colunaCompleta, peca, linha, cor) => {
  return builderColumns.movePieceToAnotherColumn(casaOrigem, coluna, colunaCompleta, peca, linha, cor);
}

const movePiece = (casaOrigem, colunaCompleta, peca, linha, cor) => {
  return builderColumns.movePieceToTheSameColumn(casaOrigem, colunaCompleta, peca, linha, cor);

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


