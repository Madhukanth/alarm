import {
	SLIDER_CHANGED,
	SWITCH_CHANGED,
	SONG_CHANGED,
	CHECK_BOX_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
	sliderValue: 100,
	switchValue: true,
	songValue: 'karuppana',
	checkBoxValue: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SLIDER_CHANGED:
			return { ...state, sliderValue: action.payload };
		case SWITCH_CHANGED:
			return { ...state, switchValue: action.payload };
		case SONG_CHANGED:
			return { ...state, songValue: action.payload };
		case CHECK_BOX_CHANGED:
			return { ...state, checkBoxValue: !action.payload };
		default:
			return state;
	}
};
