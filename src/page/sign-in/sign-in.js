import React from 'react';
import {useHistory} from 'react-router-dom';
import {Formik} from 'formik';
import {ApolloConsumer} from 'react-apollo';
import {connect} from 'react-redux';
import {validate} from './validate';
import {userQuery} from './query';
import {AuthActions} from '../../store/auth/actions';
import style from './sign-in.module.css';

function Component({dispatch}) {
  const history = useHistory();

  return (
    <div className={style['sign-in']}>
      <ApolloConsumer>
      {
        (client) => {
          return (
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              validate={validate}
              onSubmit={async (values, {setSubmitting, setErrors}) => {
                const {data} = await client.query({
                  query: userQuery,
                  variables: {
                    email: values.email,
                    password: values.password
                  }
                });
                if (!data.user) {
                  setSubmitting(false);
                  setErrors({
                    password: 'Incorrect credentials'
                  });
                  return;
                }
                dispatch(AuthActions.setAuthData({
                  token: data.user.token,
                  name: data.user.name
                }));
                history.push('/');
              }}
            >
              {
                ({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit
                 }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className={style['field']}>
                        <input
                          type='text'
                          name='email'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className={style['input']}
                        />
                        <div className={style['error']}>
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className={style['field']}>
                        <input
                          type='password'
                          name='password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className={style['input']}
                        />
                        <div className={style['error']}>
                          {errors.password && touched.password && errors.password}
                        </div>
                      </div>
                      <button
                        className={style['button']}
                        type='submit'
                      >
                        Submit
                      </button>
                    </form>
                  )
                }
              }
            </Formik>
          )
        }
      }
    </ApolloConsumer>
    </div>
  );
}

function mapStateToProps() {
  return {}
}

const SignIn = connect(mapStateToProps)(Component);

export {
  SignIn
}
