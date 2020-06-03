import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test ('this shold setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
