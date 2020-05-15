import {combineReducers} from 'redux';

import popupReducer from './popup/popup.reducer';
import sheetReducer from './sheet/sheet.reducer';

const rootReducer = combineReducers({
    sheets: sheetReducer,
    popup: popupReducer
});

export default rootReducer;