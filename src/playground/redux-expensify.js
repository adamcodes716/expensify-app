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
});
// REMOVE_EXPENSE
// action generator, object passed in and desctructured. If not exists then empty.
const removeExpense = ({ id } = {}) => ({ 
    type: 'REMOVE_EXPENSE',
    id
    
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({ // set default text, return an object
    type: 'SET_TEXT_FILTER',
    text
});
// SORT_BY_DATE
const sortByDate = () => ({ // No need to pass anything in
    type: 'SORT_BY_DATE'
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({ // No need to pass anything in
    type: 'SORT_BY_AMOUNT'
});
// SET_START_DATE
const setStartDate = (startDate) => ({ // set default start, return an object
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate) => ({ // set default start, return an object
    type: 'SET_END_DATE',
    endDate
});

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
        case 'EDIT_EXPENSE' :
            // go through every expense in the array looking for a match.  When we find, apply change
            return state.map((expense) => {
               if (expense.id === action.id) {
                   return {
                        ... expense,   // first grab existing properties
                        ...action.updates // now apply updates
                   }
               } else {
                   return expense;
               }
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
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); // amount
store.dispatch(sortByDate());  // date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user, 
    location: 'Philadelphia', 
    age: 27
})