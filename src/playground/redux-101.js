import { createStore } from 'redux';

// Action generators - functions tha return action objects


const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount =  ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount =  ({count } = {}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});




const store = createStore((state = { count: 0}, action) => {  
    console.log (action.type); 
 switch (action.type) {
    case 'INCREMENT': 
        return {           
           count: state.count + action.incrementBy
       };
       case 'DECREMENT': 
       const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
       return {
           count: state.count - decrementBy
       };
       case 'SET': 
       return {
           count: action.count
       };
       case 'RESET': 
       return {
           count: 0
       };
    default:  
      return state;  
  }

   
} );

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());  // prints state every time it changes
});

//increment the count
store.dispatch (incrementCount({incrementBy: 5}));

//decrement the count
store.dispatch (decrementCount({decrementBy: 10}));

//RESET the count
store.dispatch (resetCount());

store.dispatch (setCount({count: 101}));