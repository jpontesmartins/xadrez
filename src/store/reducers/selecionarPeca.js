const INITIAL_STATE = { 
  pecaSelecionada: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECIONAR_PECA':
    console.log('reducer SELECIONAR_PECA');
      return { ...state, pecaSelecionada: true }
    default:
      return state
  }
}