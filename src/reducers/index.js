import { combineReducers } from 'redux';
import ValueSetReducer from './ValueSetReducer';
import ValueSetReducer2 from './ValueSerReducer2';

export default combineReducers({
	valueset: ValueSetReducer,
	valueset2: ValueSetReducer2
});
