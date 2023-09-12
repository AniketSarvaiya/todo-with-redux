import { ADD_ITEM_FAILED, ADD_ITEM_SUCCESS, ADD_ITEM_REQUEST } from "../Constants/itemConstants"
import Data from '../../../Data'

export const getItems = () => async (dispatch) => {
    try {
        dispatch({ type: ADD_ITEM_REQUEST })
        const data = Data;
        console.log(data);
        dispatch({ type: ADD_ITEM_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_ITEM_FAILED, payload: error })
    }
}