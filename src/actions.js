import builderColumns from './components/Tabuleiro/builderColumns';

export const selecionarPeca = (event) => ({
  type: 'SELECIONAR_PECA',
  pecaSelecionada: event
});

export const montarTabuleiro = () => ({
  type: 'MONTAR_TABULEIRO',
});