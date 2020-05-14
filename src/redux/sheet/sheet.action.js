import {SHEET_ACTION_TYPES} from './sheet.action-type';

export const getSheetNumber = (num) => ({
    type: SHEET_ACTION_TYPES.GET_SHEET_NUMBER,
    payload: num
})