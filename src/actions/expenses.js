import uuid from 'uuid';
import database from '../firebase/firebase';

// component calls action generator
// action generator returns an object
// component dispatches object
// redux store changes

// after update: 
// component calls action generator
// action generator returns a function
// component dispatches function (react does not allow this directly)
// function runs (has the ability to dispatch other actions and whateever it wants)

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// new addExpense write to firebase
export const startAddExpense = (expenseData = {}) => { // pass in expense if it exists
  return (dispatch) => {
    const { // destructure from expenseDAta
      description = '',  // setting defaults if they don't exist
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;  // destructuring from this
    const expense = {description, note, amount, createdAt};  // cleaner code
    return database.ref('expenses').push(expense).then((ref) => {  // saving the data
      //dispatch action from above so redux store changes
      //the success 'then' gets called with a reference that we can use below
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
