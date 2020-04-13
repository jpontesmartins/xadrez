import builderColumns from '../../components/Tabuleiro/builderColumns';
import { movePiece } from "./movimentacao";
import { capturePiece } from "./captura";

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
      return montaTabuleiroInicial(state)
    case 'MOVER_PECA':
      return movePiece(action.payload, state);
    case 'CAPTURAR_PECA':
      return capturePiece(action.payload, state);
    default:
      return state
  }
}

const montaTabuleiroInicial = (state) => {
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
  };
}