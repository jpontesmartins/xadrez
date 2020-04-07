import { combineReducers } from 'redux';
import selecionarPecaReducer from './reducers/pecas';
import montarTabuleiroReducer from './reducers/tabuleiro';

const rootReducer = combineReducers({
  pecas: selecionarPecaReducer,
  tabuleiro: montarTabuleiroReducer
})

export default rootReducer;