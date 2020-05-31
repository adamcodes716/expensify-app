import { createStore, combineReducers} from 'redux';
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action ) => {
    switch(action.type){
        default: 
           return state;
    }
};

// Expenses reducer
const expensesReducerDefaultState = [];  // no default state

const expensesReducer = (state = expensesReducerDefaultState, action) => { 
   switch(action.type){
       default: 
          return state;
   }
};

const store = createStore(
    combineReducers({ 
     expenses: expensesReducer,   // roote state name and value to handle it
     filters: filtersReducer     
    })
    );

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'podfddfd',
        description: 'January Rent',
        note: 'my notes',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

}