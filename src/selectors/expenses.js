
// Get visible expenses
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => { // destructuring filters
export default (expenses, {text, sortBy, startDate, endDate}) => { // destructuring filters
    return expenses.filter ((expense) => {
        // if all of these are true then return this expense
        // if start is Nan then true.  Else check against create
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endtDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {  // filtered and sorted array being return result
        if (sortBy ==='date') {
            return a.createAt < b.createdAt ? 1 : -1;
        }
        else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;  // higher value first
        };
    });
};