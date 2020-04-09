export const moverPeca = (casaOrigem, peca, linha, coluna, cor) => ({
  type: 'MOVER_PECA',
  payload: {
    casaOrigem,
    peca,
    linha,
    coluna,
    cor
  }
});

export const selecionarPeca = (casaOrigem, peca, linha, coluna, cor) => ({
  type: 'SELECIONAR_PECA',
  payload: {
    casaOrigem,
    peca,
    linha,
    coluna,
    cor
  }
});

export const montarTabuleiro = () => ({
  type: 'MONTAR_TABULEIRO',
});