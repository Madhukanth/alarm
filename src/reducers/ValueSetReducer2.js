import {
	SLIDER2_CHANGED,
	SWITCH2_CHANGED,
	SONG2_CHANGED,
	CHECK_BOX2_CHANGED,
	FETCH_VALUES2,
	PICKER2_VALUE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
	slider2Value: 90,
	switch2Value: true,
	song2Value: 'karuppana',
	checkBox2Value: false,
	picker2Value: true
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SLIDER2_CHANGED:
			return { ...state, slider2Value: action.payload };
		case SWITCH2_CHANGED:
			return { ...state, switch2Value: action.payload };
		case SONG2_CHANGED:
			return { ...state, song2Value: action.payload };
		case CHECK_BOX2_CHANGED:
			return { ...state, checkBox2Value: !action.payload };
		case FETCH_VALUES2:
			return { ...state };
		case PICKER2_VALUE_CHANGE:
			return { ...state, picker2Value: action.payload };
		default:
			return state;
	}
};
