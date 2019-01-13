import builderColumns from './components/Tabuleiro/builderColumns';

export const selecionarPeca = (event) => ({
  type: 'PECA_SELECIONADA',
  pecaSelecionada: event
});

export const montarTabuleiro = (event) => ({
  type: 'TABULEIRO_MONTADO',
  colunaA: builderColumns.buildColumnB(),
  colunaB: builderColumns.buildColumnB(),
  colunaC: builderColumns.buildColumnC(),
  colunaD: builderColumns.buildColumnD(),
  colunaE: builderColumns.buildColumnE(),
  colunaF: builderColumns.buildColumnF(),
  colunaG: builderColumns.buildColumnG(),
  colunaH: builderColumns.buildColumnH(),
});