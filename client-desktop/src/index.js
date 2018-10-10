import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

import { ApolloClient } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import resolvers from './app/graphql/resolvers'


const cache = new InMemoryCache();

persistCache({
  cache,
  storage:  window.localStorage,
});

const stateLink = withClientState({
  cache,
  resolvers
});

const link = ApolloLink.from([
  stateLink,
  new HttpLink({ uri: process.env.REACT_APP_APOLLO_SERVER_URI })
])

const defaultOptions = {
  query: {
    fetchPolicy: 'cache-and-network'
  }
}

const client = new ApolloClient({
  link,
  cache,
  defaultOptions
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

export { client };
