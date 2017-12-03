import {
	SLIDER_CHANGED,
	SWITCH_CHANGED,
	SONG_CHANGED,
	CHECK_BOX_CHANGED,
	FETCH_VALUES,
	PICKER_VALUE_CHANGE
} from './types';

export const sliderChanged = value => ({
	type: SLIDER_CHANGED,
	payload: value
});

export const switchChanged = value => ({
	type: SWITCH_CHANGED,
	payload: value
});

export const songChanged = value => ({
	type: SONG_CHANGED,
	payload: value
});

export const checkBoxChanged = value => ({
	type: CHECK_BOX_CHANGED,
	payload: value
});

export const fetchValues = () => ({
	type: FETCH_VALUES
});

export const pickerValueChanged = value => ({
	type: PICKER_VALUE_CHANGE,
	payload: value
});
