import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'; // this is default export

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store=configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: -21000}));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: -22000}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);;

ReactDOM.render(<AppRouter />, document.getElementById('app'));
