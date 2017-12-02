import {
	SLIDER_CHANGED,
	SWITCH_CHANGED,
	SONG_CHANGED,
	CHECK_BOX_CHANGED
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
