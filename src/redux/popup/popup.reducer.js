import { POPUP_ACTION_TYPES } from './popup.action.types';

const INITIAL_STATE = {
    show: false,
    error: ''
}

const popupReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POPUP_ACTION_TYPES.TOGGLE_POPUP:
            return {
                ...state,
                show: !state.show
            }
        default: return state
    }
}

export default popupReducer;