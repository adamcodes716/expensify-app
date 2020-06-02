// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({ // set default text, return an object
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
export const sortByDate = () => ({ // No need to pass anything in
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
export const sortByAmount = () => ({ // No need to pass anything in
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
export const setStartDate = (startDate) => ({ // set default start, return an object
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
export const setEndDate = (endDate) => ({ // set default start, return an object
    type: 'SET_END_DATE',
    endDate
});