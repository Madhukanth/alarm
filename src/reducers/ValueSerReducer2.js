import {
	SLIDER2_CHANGED,
	SWITCH2_CHANGED,
	SONG2_CHANGED,
	CHECK2_BOX_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	slider2Value: 100,
	switch2Value: true,
	song2Value: 'karuppana',
	checkBox2Value: false
};

export default (state2 = INITIAL_STATE, action2) => {
	switch (action2.type) {
		case SLIDER2_CHANGED:
			return { ...state2, slider2Value: action2.payload2 };
		case SWITCH2_CHANGED:
			return { ...state2, switch2Value: action2.payload2 };
		case SONG2_CHANGED:
			return { ...state2, song2Value: action2.payload2 };
		case CHECK2_BOX_CHANGED:
			return { ...state2, checkBox2Value: !action2.payload2 };
		default:
			return state2;
	}
};
