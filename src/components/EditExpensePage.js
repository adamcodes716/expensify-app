import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage= (props) => {
    return ( 
    <div>
       <ExpenseForm
         expense={props.expense}
          onSubmit={(expense) => {
              //Dispatch the action to edit the expense
              props.dispatch(editExpense(props.expense.id, expense));
              //Redirect to the dashboard
              props.history.push('/'); // will use routing and then not full refresh
            console.log('updated', expense);
        } } 
       />
       <button onClick= {() => {
         props.dispatch(removeExpense({ id: props.expense.id })); // shorthane
         props.history.push('/'); // will use routing and then not full refresh
        }}
        >Remove</button>
    </div>
    );  
};

const mapStateToProps = (state, props) => {
   return {
       expense: state.expenses.find((expense) => { // could also convert this to shorthand
           return expense.id === props.match.params.id;
       })
   }
};

export default connect(mapStateToProps)(EditExpensePage);
//export default EditExpensePage;