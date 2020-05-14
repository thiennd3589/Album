import {combineReducers} from 'redux';

import sheetReducer from './sheet/sheet.reducer';

const rootReducer = combineReducers({
    sheets: sheetReducer
});

export default rootReducer;