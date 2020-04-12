import builderColumns from '../../components/Tabuleiro/builderColumns';
import { moveAll } from "./movimentacao";
import { captureAll } from "./captura";

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
      return moveAll(action.payload, state);
    case 'CAPTURAR_PECA':
      return captureAll(action.payload, state);
    default:
      return state
  }
}

function montaTabuleiroInicial(state) {
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