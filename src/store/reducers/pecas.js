const INITIAL_STATE = {
  pecaSelecionada: {},
  linha: 0,
  coluna: "",
  cor: "",
  casaOrigem: "",
  aguardandoSegundoClick: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECIONAR_PECA':
      return selecionarPeca(state, action);
    case 'LIMPAR':
      return limpar();
    default:
      return state
  }
}

const selecionarPeca = (state, action) => {
  return {
    ...state,
    pecaSelecionada: action.payload.peca,
    linha: action.payload.linha,
    coluna: action.payload.coluna,
    cor: action.payload.cor,
    casaOrigem: action.payload.casaOrigem,
    aguardandoSegundoClick: action.payload.aguardandoSegundoClick
  };
}

const limpar = () => {
  return {
    aguardandoSegundoClick: false
  };
}
