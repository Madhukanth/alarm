import { combineReducers } from 'redux';
import ValueSetReducer from './ValueSetReducer';
import ValueSetReducer2 from './ValueSetReducer2';

export default combineReducers({
	valueset: ValueSetReducer,
	valueset2: ValueSetReducer2
});
