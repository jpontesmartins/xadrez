export const moverPeca = (peca, linha, coluna, cor) => ({
  type: 'MOVER_PECA',
  payload: {
    peca,
    linha,
    coluna,
    cor
  }
});

export const selecionarPeca = (peca, linha, coluna, cor) => ({
  type: 'SELECIONAR_PECA',
  payload: {
    peca,
    linha,
    coluna,
    cor
  }
});

export const montarTabuleiro = () => ({
  type: 'MONTAR_TABULEIRO',
});