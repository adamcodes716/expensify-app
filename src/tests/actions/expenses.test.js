import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('this should setup removeexpense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test ('this should setup edit expense action object', () => {
    const action = editExpense('123abc', {note:  'New note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note:  'New note value'}
    });
});

test ('should setup add expense action object with provided vals', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note:'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)  // checks for type and not value
        }
    });
});

test ('should setup add expense action object with default vals', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),  // checks for type and not value
            description: '',
            amount: 0,
            createdAt: 0,
            note:''
        }
    });
});
