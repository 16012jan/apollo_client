import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from 'react-apollo';

import SongsList from './components/SongsList';
import SongCreate from './components/SongCreate';
import SongDetails from './components/SongDetails';
import App from './components/App';

import './style/style.css';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongsList} />
          <Route path="songs/new" component={SongCreate} />
          <Route path="songs/:id" component={SongDetails} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
