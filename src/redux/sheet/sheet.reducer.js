import { SHEET_ACTION_TYPES } from './sheet.action-type';

const INITIAL_STATE = {
    number: 0,
    error: '',
}

const sheetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHEET_ACTION_TYPES.GET_SHEET_NUMBER:
            return {
                ...state,
                number: action.payload
            }

        default:
            return state;
    }
}

export default sheetReducer;