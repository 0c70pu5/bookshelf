import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {onError} from 'apollo-link-error';
import {createHttpLink} from 'apollo-link-http';
import {userInfo} from './local-storage';

function getClient() {
  const httpLink = createHttpLink({uri: 'http://localhost:3001/graphql'});
  const middlewareLink = new ApolloLink((operation, forward) => {
    //todo: set token from localStorage
    operation.setContext({
      headers: {
        authorization: 'token'
      }
    });
    return forward(operation);
  });
  const errorLink = onError(({networkError}) => {
    if (networkError.statusCode === 401) {
      userInfo.clear();
    }
  });
  const link = errorLink.concat(
    middlewareLink.concat(
      httpLink
    ));

  const cache = new InMemoryCache();

  return new ApolloClient({
    cache: cache,
    link: link,
    name: 'library',
    queryDeduplication: false,
    credentials: 'include'
  });
}

export {
  getClient
}
