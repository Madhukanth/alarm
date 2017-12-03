import {
	SLIDER2_CHANGED,
	SWITCH2_CHANGED,
	SONG2_CHANGED,
	CHECK_BOX2_CHANGED,
	FETCH_VALUES2,
	PICKER2_VALUE_CHANGE
} from './types';

export const slider2Changed = value => ({
	type: SLIDER2_CHANGED,
	payload: value
});

export const switch2Changed = value => ({
	type: SWITCH2_CHANGED,
	payload: value
});

export const song2Changed = value => ({
	type: SONG2_CHANGED,
	payload: value
});

export const checkBox2Changed = value => ({
	type: CHECK_BOX2_CHANGED,
	payload: value
});

export const fetchValues2 = () => ({
	type: FETCH_VALUES2
});

export const picker2ValueChanged = value => ({
	type: PICKER2_VALUE_CHANGE,
	payload: value
});
