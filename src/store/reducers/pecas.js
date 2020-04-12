const INITIAL_STATE = {
  pecaSelecionada: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECIONAR_PECA':
      const newState = {
        ...state,
        pecaSelecionada: action.payload.peca,
        linha: action.payload.linha,
        coluna: action.payload.coluna,
        cor: action.payload.cor,
        casaOrigem: action.payload.casaOrigem,
        aguardandoSegundoClick: action.payload.aguardandoSegundoClick
      };
      return newState;
    
    default:
      return state
  }
}