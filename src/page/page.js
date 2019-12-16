import React from 'react';
import {Route, Switch} from 'react-router-dom'
import {PrivateRoute} from '../module/private-route';
import {SignIn} from './sign-in';
import {Private} from './private';

function Page() {
  return (
    <Switch>
      <Route
        path='/login'
        component={SignIn}
      />
      <PrivateRoute
        path='/'
        component={Private}
        redirectPath='/login'
      />
    </Switch>
  );
}

export {
  Page
}

