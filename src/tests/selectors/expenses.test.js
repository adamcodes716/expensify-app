import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should filter by text value'), () => {
    const filters = {
        text: 'e' , // searching for items with 'e' in them
        sortyBy: 'date',
        startDate: undefined,
        endDate: undefinded
    };
    const result = selectExpenses();
    expect(result).toEqual([expenses[2], expenses[1]]);
}; 

test('should filter by start date'), () => {
    const filters = {
        text: '' , 
        sortyBy: 'date',
        startDate: moment(0),
        endDate: undefinded
    };
    const result = selectExpenses();
    expect(result).toEqual([expenses[2], expenses[1]]);
};

test('should filter by end date'), () => {
    const filters = {
        text: '' , 
        sortyBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days') // filters out more than 2 days away
    };
    const result = selectExpenses();
    expect(result).toEqual([expenses[0], expenses[1]]);
};

test('should filter by date'), () => {
    const filters = {
        text: '' , 
        sortyBy: 'date',
        startDate: undefined,  // could also let them be default
        endDate: undefined
    };
    const result = selectExpenses();
    expect(result).toEqual([expenses[2], expenses[0],expenses[1]]);
};

test('should filter by amount'), () => {
    const filters = {
        text: '' , 
        sortyBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses();
    expect(result).toEqual([expenses[2], expenses[3],expenses[1]]);
};






