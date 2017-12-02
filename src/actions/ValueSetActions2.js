import {
	SLIDER2_CHANGED,
	SWITCH2_CHANGED,
	SONG2_CHANGED,
	CHECK_BOX2_CHANGED
} from './types';

export const slider2Changed = value => ({
	type: SLIDER2_CHANGED,
	payload2: value
});

export const switch2Changed = value => ({
	type: SWITCH2_CHANGED,
	payload2: value
});

export const song2Changed = value => ({
	type: SONG2_CHANGED,
	payload2: value
});

export const checkBox2Changed = value => ({
	type: CHECK_BOX2_CHANGED,
	payload2: value
});
