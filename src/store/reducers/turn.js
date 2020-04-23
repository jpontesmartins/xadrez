import { WHITE, BLACK } from "../../components/constants";

const INITIAL_STATE = {
  currentPlayer: "white",
  whiteCemetery: [],
  blackCemetery: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      const nextToMove = state.currentPlayer == WHITE ? BLACK : WHITE
      return {
        ...state,
        currentPlayer: nextToMove
      }
    case 'SEND_TO_CEMETERY':
      console.log('SEND_TO_CEMETERY');
      const peca = action.payload.peca;
      let white = state.whiteCemetery;
      let black = state.blackCemetery;

      if (action.payload.cor == WHITE) {
        white = state.whiteCemetery;
        white.push(peca);
      } else {
        black = state.blackCemetery;
        black.push(peca);
      }
      return {
        ...state,
        whiteCemetery: white,
        blackCemetery: black 
      };
    default:
      return state;
  }
}