import {createSelector} from 'reselect';

const popupSelect = state => state.popup;

export const isPopupShow = createSelector(
    [popupSelect],
    popup => popup.show
)