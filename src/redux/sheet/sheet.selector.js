import {createSelector} from 'reselect';

const sheetSelect = state => state.sheets;

export const numberSheetsSelect = createSelector(
    [sheetSelect],
    sheets => sheets.number
)