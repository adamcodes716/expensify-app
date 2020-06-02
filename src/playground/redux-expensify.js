

store.subscribe(() => {
      const state = store.getState();
      const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
      console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

//console.log(expenseOne);

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount()); // amount
//store.dispatch(sortByDate());  // date

// store.dispatch(setStartDate(900));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

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

