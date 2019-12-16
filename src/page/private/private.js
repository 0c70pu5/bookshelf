import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, useHistory} from 'react-router-dom';
import {AuthActions} from '../../store/auth/actions';
import style from '../layout.module.scss';
import {Authors} from './authors';
import {Author} from './author';
import {Books} from './books';
import {Book} from './book';

function Component({dispatch}) {
  const history = useHistory();
  const logout = () => {
    dispatch(AuthActions.logout());
    history.push('/login');
  };

  return (
    <div className={style['layout']}>
      <div
        className={style['logout']}
        onClick={logout}
      >
        logout
      </div>
      <div className={style['body']}>
        <Switch>
          <Route
            path={'/author/:authorId'}
            component={Author}
          />
          <Route
            path={`/book/:bookId`}
            component={Book}
          />
          <Route
            path={`/book`}
            component={Books}
          />
          <Route
            path='/'
            exact
            component={Authors}
          />
        </Switch>
      </div>
    </div>
  )
}

function mapStateToProps() {
  return {}
}

const Private = connect(mapStateToProps)(Component);

export {
  Private
}
