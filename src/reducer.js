import { combineReducers } from 'redux';
import selectPieceReducer from './reducers/selectPieceReducer';
import tabuleiroReducer from './reducers/tabuleiroReducer';

const rootReducer = combineReducers({
  selectPieceReducer: selectPieceReducer,
  tabuleiroReducer: tabuleiroReducer
})

export default rootReducer;