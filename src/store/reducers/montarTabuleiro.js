import builderColumns from '../../components/Tabuleiro/builderColumns';

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
      let novaColunaA;
      let novaColunaB;
      let novaColunaC;
      let novaColunaD;
      let novaColunaE;
      let novaColunaF;
      let novaColunaG;
      let novaColunaH;

      console.log("Casa origem: " + action.payload.casaOrigem);

      switch (action.payload.coluna) {
        case "A":
          console.log("A");
          novaColunaA = movePiece(action.payload.casaOrigem,
            state.colunaA,
            action.payload.peca,
            action.payload.linha,
            action.payload.cor);
          break;
        case "B": {
          console.log("B");
          novaColunaB = movePiece(action.payload.casaOrigem,
            state.colunaB, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "C": {
          console.log("C");
          novaColunaC = movePiece(action.payload.casaOrigem,
            state.colunaC, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "D": {
          console.log("D");
          novaColunaD = movePiece(action.payload.casaOrigem,
            state.colunaD, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "E": {
          console.log("E");
          novaColunaE = movePiece(action.payload.casaOrigem,
            state.colunaE, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "F": {
          console.log("F");
          novaColunaF = movePiece(action.payload.casaOrigem,
            state.colunaF, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "G": {
          console.log("G");
          novaColunaG = movePiece(action.payload.casaOrigem,
            state.colunaG, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        case "H": {
          console.log("H");
          novaColunaH = movePiece(action.payload.casaOrigem,
            state.colunaH, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
          break;
        }
        default: {
          console.log("default");
        }
      }

      return {
        ...state,
        colunaA: (novaColunaA ? novaColunaA : state.colunaA),
        colunaB: (novaColunaB ? novaColunaB : state.colunaB),
        colunaC: (novaColunaC ? novaColunaC : state.colunaC),
        colunaD: (novaColunaD ? novaColunaD : state.colunaD),
        colunaE: (novaColunaE ? novaColunaE : state.colunaE),
        colunaF: (novaColunaF ? novaColunaF : state.colunaF),
        colunaG: (novaColunaG ? novaColunaG : state.colunaG),
        colunaH: (novaColunaH ? novaColunaH : state.colunaH),
        
      }
    default:
      return state
  }
}

const movePiece = (casaOrigem, colunaCompleta, peca, linha, cor) => {
  return builderColumns.movePieceToColumnB(casaOrigem, colunaCompleta, peca, linha, cor);

}