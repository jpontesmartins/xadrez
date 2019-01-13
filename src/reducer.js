import { combineReducers } from 'redux';
import selecionarPecaReducer from './reducers/selecionarPeca';
import montarTabuleiroReducer from './reducers/tabuleiroReducer';

const rootReducer = combineReducers({
  selecionarPeca: selecionarPecaReducer,
  montarTabuleiro: montarTabuleiroReducer
})

export default rootReducer;