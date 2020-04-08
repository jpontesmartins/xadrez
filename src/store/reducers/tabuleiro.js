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
      let allColumns = new Map();
      allColumns.set("A", state.colunaA);
      allColumns.set("B", state.colunaB);
      allColumns.set("C", state.colunaC);
      allColumns.set("D", state.colunaD);
      allColumns.set("E", state.colunaE);
      allColumns.set("F", state.colunaF);
      allColumns.set("G", state.colunaG);
      allColumns.set("H", state.colunaH);

      const { coluna, linha, peca, cor, casaOrigem } = action.payload;

      console.log(`Casa origem: ${casaOrigem}`);
      console.log(`Casa destino: ${coluna}${linha}`);

      return {
        ...state,
        colunaA: (coluna == "A" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaA),
        colunaB: (coluna == "B" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaB),
        colunaC: (coluna == "C" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaC),
        colunaD: (coluna == "D" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaD),
        colunaE: (coluna == "E" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaE),
        colunaF: (coluna == "F" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaF),
        colunaG: (coluna == "G" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaG),
        colunaH: (coluna == "H" ? movePiece(casaOrigem, allColumns.get(coluna), peca, linha, cor) : state.colunaH),
      }
    default:
      return state
  }
}

const movePiece = (casaOrigem, colunaCompleta, peca, linha, cor) => {
  return builderColumns.movePieceToTheSameColumn(casaOrigem, colunaCompleta, peca, linha, cor);

}