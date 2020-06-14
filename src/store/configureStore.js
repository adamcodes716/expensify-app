import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


// if dev tools exists use it.  Otherwise compose middleware.  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer  // new property, managed by authreducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
