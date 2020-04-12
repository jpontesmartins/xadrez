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

export const selecionarPeca = (casaOrigem, peca, linha, coluna, cor, aguardandoSegundoClick) => ({
  type: 'SELECIONAR_PECA',
  payload: {
    casaOrigem,
    peca,
    linha,
    coluna,
    cor,
    aguardandoSegundoClick
  }
});

export const capturarPeca = (casaDaCaptura, peca, linha, coluna, cor, pecaDeAtaque, pecaOrigemAtaque) => ({
  type: 'CAPTURAR_PECA',
  payload: {
    casaDaCaptura,
    peca,
    linha,
    coluna,
    cor,
    pecaDeAtaque,
    pecaOrigemAtaque
  }
});

export const montarTabuleiro = () => ({
  type: 'MONTAR_TABULEIRO',
});