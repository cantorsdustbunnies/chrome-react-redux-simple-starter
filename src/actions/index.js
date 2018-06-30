export const INIT = 'INIT';
export const SAVE_TO_STORAGE = 'SAVE_TO_STORAGE';
export const REMOVE_FROM_STORAGE = 'REMOVE_FROM_STORAGE';

import { default_state } from '../chrome_extension/default_state';

function emitChromeStorageAction(data, type) {
	return {
		type: type,
		payload: data,
	};
}

export const initFromChromeStorage = () => {
	if (chrome.storage) {
		return dispatch => {
			chrome.storage.sync.get('state', data => {
				dispatch(emitChromeStorageAction(data.state, INIT));
			});
		};
	} else {
		return dispatch => {
			dispatch(emitChromeStorageAction(default_state, INIT));
		};
	}
};

export const saveToChromeStorage = (key, value) => {
	if (chrome.storage) {
		return dispatch => {
			chrome.storage.sync.get('state', data => {
				const newState = Object.assign({}, data.state, { [key]: value });
				chrome.storage.sync.set({ state: newState }, () => {
					dispatch(emitChromeStorageAction({ [key]: value }, SAVE_TO_STORAGE));
				});
			});
		};
	} else {
		return dispatch => {
			dispatch(emitChromeStorageAction({ [key]: value }, SAVE_TO_STORAGE));
		};
	}
};
