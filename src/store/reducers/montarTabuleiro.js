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
        console.log("mover peça");
        console.log("-----------");
        //encontar a Coluna "B";
        //ir na posicao "3"
        //setar o valor sendo a PecaSelecionada
        console.log(action.payload);
        console.log("-----------");

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
    default:
      return state
  }
}