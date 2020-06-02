// Expenses reducer
const expensesReducerDefaultState = [];  // no default state

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
export default (state = expensesReducerDefaultState, action) => {  
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

