import { ADD_ITEM_FAILED, ADD_ITEM_SUCCESS, ADD_ITEM_REQUEST } from "../Constants/itemConstants"
export const itemReducers = (state = { isLoading: false, items: {} }, action) => {
    switch (action.type) {
        case ADD_ITEM_REQUEST:
            return {
                ...state,
                isLoading: true,
                items: []
            };
        case ADD_ITEM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                items: action.payload
            };
        case ADD_ITEM_FAILED:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };

        default:
            return { ...state }
    }
}