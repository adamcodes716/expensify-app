import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage= () => {
    return <div>
       This is from my dashboard Component
    </div>
}

const AddExpensePage= () => {
    return <div>
       This is from my add Expense Component
    </div>
}
const EditExpensePage= () => {
    return <div>
       This is from my add Edit Expense Component
    </div>
}

const HelpPage= () => {
    return <div>
       This is from my Help Component
    </div>
}

const NotFoundPage= () => {
    return <div>
       404 - <Link to="/"> Go Home </Link>
    </div>
}

const Header = () => (
    <header>
      <h1>Expensify</h1>
      <p> <NavLink to="/" activeClassName="is-active" exact="true"> Dashboard </NavLink></p>
      <p> <NavLink to="/create" activeClassName="is-active"> Create an Expense </NavLink></p>
      <p> <NavLink to="/edit" activeClassName="is-active"> Edit an Expense </NavLink></p>
      <p> <NavLink to="/help" activeClassName="is-active"> Help </NavLink></p>
    </header>
);

const routes = (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>  
        </Switch> 
     </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));
