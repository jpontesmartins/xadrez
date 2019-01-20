export const selecionarPeca = (event) => ({
  type: 'SELECIONAR_PECA',
  pecaSelecionada: event
});

export const montarTabuleiro = () => ({
  type: 'MONTAR_TABULEIRO',
});