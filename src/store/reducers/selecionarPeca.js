const INITIAL_STATE = { 
  pecaSelecionada: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECIONAR_PECA':
    console.log('lala');
      return { ...state, pecaSelecionada: true }
    default:
      return state
  }
}