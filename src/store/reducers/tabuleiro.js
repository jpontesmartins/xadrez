import { movePiece } from "./movimentacao";
import { capturePiece } from "./captura";
import builder from "./builder";

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
      return builder.startingPosition(state);
    case 'MOVER_PECA':
      return movePiece(action.payload, state);
    case 'CAPTURAR_PECA':
      return capturePiece(action.payload, state);
    default:
      return state
  }
}