import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {getToken} from '../store/auth/selector'

function Component({
                        isAuth,
                        component,
                        redirectPath,
                        ...props
                      }) {
  if (isAuth) {
    return (
      <Route
        component={component}
        {...props}
      />
    );
  } else {
    return (
      <Redirect
        to={redirectPath}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth: Boolean(getToken(state))
  }
}

const PrivateRoute = connect(mapStateToProps)(Component);

export {
  PrivateRoute
}
