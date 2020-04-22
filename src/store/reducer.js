import { combineReducers } from 'redux';
import selecionarPecaReducer from './reducers/pecas';
import montarTabuleiroReducer from './reducers/tabuleiro';
import turnReducer from './reducers/turn';

const rootReducer = combineReducers({
  pecas: selecionarPecaReducer,
  tabuleiro: montarTabuleiroReducer,
  turn: turnReducer
})

export default rootReducer;