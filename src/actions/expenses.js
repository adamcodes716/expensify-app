import uuid from 'uuid';

// Action generators for expenses

// ADD_EXPENSE
export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({//destructuring,setting defaults
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

