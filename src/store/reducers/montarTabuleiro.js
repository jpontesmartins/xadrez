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
        let novaColuna;
        if (action.payload.coluna == "B") {
          novaColuna = movePiece(action.payload.casaOrigem,
            state.colunaB, 
            action.payload.peca, 
            action.payload.linha, 
            action.payload.cor);
        }
        console.log("novaColuna");
        console.log(novaColuna);

        return {
          ...state,
          colunaB: novaColuna
          // tabuleiro: tabuleiro
        }
    default:
      return state
  }
}

const movePiece = (casaOrigem, colunaCompleta, peca, linha, cor) => {
  return builderColumns.movePieceToColumnB(casaOrigem, colunaCompleta, peca, linha, cor);
  
}