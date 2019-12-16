import React, {useRef} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import thunk from 'redux-thunk';
import {reducer} from './store';
import {getClient} from './module/graph-ql';
import {Page} from './page';

function App() {
  const client = useRef(getClient());
  const middlewares = [thunk];
  const store = createStore(
    reducer,
    {},
    applyMiddleware(...middlewares)
  );

  return (
    <ApolloProvider client={client.current}>
      <Provider store={store}>
        <BrowserRouter>
          <Page/>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
