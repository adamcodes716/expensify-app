import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({//destructuring,setting defaults
    type: 'ADD_EXPENSE',
    expense: {
       id: uuid(),   // UID created from npm package
       description,
       note,
       amount,
       createdAt
    }
})
;
// REMOVE_EXPENSE
// action generator, object passed in and desctructured. If not exists then empty.
const removeExpense = ({ id } = {}) => ({ 
    type: 'REMOVE_EXPENSE',
    id
    
})

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


// Expenses reducer
const expensesReducerDefaultState = [];  // no default state

const expensesReducer = (state = expensesReducerDefaultState, action) => { 
   switch(action.type){
       case 'ADD_EXPENSE' :
           return [
               ...state,
               action.expense
           ];
        case 'REMOVE_EXPENSE' :
            return state.filter(({id}) => {  // could also receive 'expense'.  Instead destructured.
            //  return state.filter(({id})=> id !== action.id) // this is the same but shorter
                //return new array. Pass in function;
                //if true returns true item is kept in array.  Else removed.
                return id !== action.id 

            });
       default: 
          return state;
   }
};

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

const store = createStore(
    combineReducers({ 
     expenses: expensesReducer,   // roote state name and value to handle it
     filters: filtersReducer     
    })
    );

store.subscribe(() => {
        console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300}));

//console.log(expenseOne);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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