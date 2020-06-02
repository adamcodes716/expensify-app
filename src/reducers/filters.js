// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};
export default (state = filtersReducerDefaultState, action ) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,  // spread out state
                text: action.text // apply change to text
            };
            case 'SORT_BY_AMOUNT':
            return {
                ...state,  // spread out state
                sortBy: 'amount' // apply change 
            };
            case 'SORT_BY_DATE':
            return {
                ...state,  // spread out state
                sortBy: 'date' // apply change 
            };
            case 'SET_START_DATE':
            return {
                ...state,  // spread out state
                startDate: action.startDate // apply change 
            };
            case 'SET_END_DATE':
            return {
                ...state,  // spread out state
                endDate: action.endDate // apply change 
            };
        default: 
           return state;
    }
};