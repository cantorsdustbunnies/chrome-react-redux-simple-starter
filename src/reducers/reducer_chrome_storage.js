import { INIT, SAVE_TO_STORAGE } from '../actions';

const DEFAULT_STATE = {
	colors: [],
	selected: '',
};

export default function(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case INIT:
			return Object.assign({}, state, action.payload);
		case SAVE_TO_STORAGE:
			return Object.assign({}, state, action.payload);
	}

	return state;
}
