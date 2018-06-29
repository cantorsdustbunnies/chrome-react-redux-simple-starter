import { combineReducers } from 'redux';
import ChromeReducer from './reducer_chrome_storage';

const rootReducer = combineReducers({
	chrome: ChromeReducer,
});

export default rootReducer;
