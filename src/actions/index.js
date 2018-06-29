export const INIT = 'INIT';
export const SAVE_TO_STORAGE = 'SAVE_TO_STORAGE';
export const REMOVE_FROM_STORAGE = 'REMOVE_FROM_STORAGE';

function emitChromeStorageAction(data, type) {
	return {
		type: type,
		payload: data,
	};
}

export const initFromChromeStorage = () => {
	return dispatch => {
		chrome.storage.sync.get('state', data => {
			dispatch(emitChromeStorageAction(data.state, INIT));
		});
	};
};

export const saveToChromeStorage = (key, value) => {
	return dispatch => {
		chrome.storage.sync.get('state', data => {
			const newState = Object.assign({}, data.state, { [key]: value });
			chrome.storage.sync.set({ state: newState }, () => {
				dispatch(emitChromeStorageAction({ [key]: value }, SAVE_TO_STORAGE));
			});
		});
	};
};
