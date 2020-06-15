import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

//unconnected component, stateless
export const PublicRoute = ({
    isAuthenticated, 
    component: Component, 
    ...rest   // everything that we did not destructure.  Pass var "rest" in component
}) => (
        // Everything above is passed in to Route. It needs component but not isAuthenticated
        <Route {...rest} component={(props) => (
            isAuthenticated ? ( // redirect if not logged in
              <Redirect to="/dashboard" />  
            ) : (                
              <Component {...props} />
              )
          )} />
        );
      
      const mapStateToProps = (state) => ({
        isAuthenticated: !!state.auth.uid
      });
      
      export default connect(mapStateToProps)(PublicRoute);