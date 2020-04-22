const INITIAL_STATE = {
  currentPlayer: "white",
  white: "",
  black: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_TURN':
      const nextToMove = state.currentPlayer == "white" ? "black" : "white"
      console.log("next to move: " + nextToMove);
      return {
        currentPlayer: nextToMove
      }
    default:
      return state;
  }
}