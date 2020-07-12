import { ADD_TO_HISTORY } from "./../constants/action-types";

const AddToHistory = (payload) => {
    return { type: ADD_TO_HISTORY, payload }
};

export default AddToHistory;