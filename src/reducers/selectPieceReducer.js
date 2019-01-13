const INITIAL_STATE = { 
  pecaSelecionada: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PECA_SELECIONADA':
      return { ...state, pecaSelecionada: true }
    default:
      return state
  }
}