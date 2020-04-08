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
          colunaA: (colunaDestino == "A" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaA),
          colunaB: (colunaDestino == "B" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaB),
          colunaC: (colunaDestino == "C" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaC),
          colunaD: (colunaDestino == "D" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaD),
          colunaE: (colunaDestino == "E" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaE),
          colunaF: (colunaDestino == "F" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaF),
          colunaG: (colunaDestino == "G" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaG),
          colunaH: (colunaDestino == "H" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaH),
        }
      } else {

        return {
          ...state,
          colunaA: movimentacaoA(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaB: movimentacaoB(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaC: movimentacaoC(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaD: movimentacaoD(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaE: movimentacaoE(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaF: movimentacaoF(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaG: movimentacaoG(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),
          colunaH: movimentacaoH(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state),

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

function movimentacaoA(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {
  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "A") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }
  
  if (colunaDestino == "A") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor, state);
  } else {
    return state.colunaA;
  }
}

function movimentacaoB(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {
  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "B") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "B") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaB
  }

}

function movimentacaoC(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "C") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "C") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaC
  }
}


function movimentacaoD(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "D") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "D") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaD
  }
}

function movimentacaoE(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "E") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "E") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaE
  }
}

function movimentacaoF(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {
  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "F") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "F") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaF
  }
}

function movimentacaoG(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "G") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "G") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaG
  }
}

function movimentacaoH(colunaDestino, casaOrigem, coluna, allColumns, peca, linha, cor, state) {

  const colunaOrigem = casaOrigem.split("")[0];
  if (colunaOrigem == "H") {
    let colunaZerada = allColumns.get(colunaOrigem);
    colunaZerada = esvaziaCasaDaPecaMovimentada(casaOrigem, allColumns);
    return colunaZerada;
  }

  if (colunaDestino == "H") {
    return movePieceToAnotherColumn(casaOrigem, coluna, allColumns.get(coluna), peca, linha, cor)
  } else {
    return state.colunaH
  }
}


