import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';



const client = new ApolloClient({
  uri: 'https://api-euwest.graphcms.com/v1/cjmx9j5qa0uhh01glgne6ra2p/master'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
