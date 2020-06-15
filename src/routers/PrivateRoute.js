import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

//unconnected component, stateless
export const PrivateRoute = ({
    isAuthenticated, // from mapStatetoProps
    component: Component, // from the PrivateRoute definition
    ...rest   // everything that we did not destructure.  Pass var "rest" in component
}) => (
        // Everything above is passed in to Route. It needs component but not isAuthenticated
        <Route {...rest} component={(props) => (
            isAuthenticated ? ( // show the component if logged in
              <div>
                <Header />
                <Component {...props} />
              </div>
            ) : (                // redirect if not logged in
                <Redirect to="/" />
              )
          )} />
        );
      
      const mapStateToProps = (state) => ({
        isAuthenticated: !!state.auth.uid
      });
      
      export default connect(mapStateToProps)(PrivateRoute);