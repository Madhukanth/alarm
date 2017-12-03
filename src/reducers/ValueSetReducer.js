import {
	SLIDER_CHANGED,
	SWITCH_CHANGED,
	SONG_CHANGED,
	CHECK_BOX_CHANGED,
	FETCH_VALUES,
	PICKER_VALUE_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
	sliderValue: 100,
	switchValue: true,
	songValue: 'karuppana',
	checkBoxValue: false,
	pickerValue: true
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
			return { ...state, checkBoxValue: action.payload };
		case FETCH_VALUES:
			return { ...state };
		case PICKER_VALUE_CHANGE:
			return { ...state, pickerValue: !action.payload };
		default:
			return state;
	}
};
