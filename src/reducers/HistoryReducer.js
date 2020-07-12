const HistoryReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_HISTORY':
            return { ...state, searchedCities : [...state.searchedCities, action.payload] }
 
        default:
            return state;
    }
}

export default HistoryReducer;