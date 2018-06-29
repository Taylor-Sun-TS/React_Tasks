// import 'isomorphic-fetch';
// import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import MovieListPage from 'MovieListPage'
import MovieDetailPage from 'MovieDetailPage'
import NotFound from 'NotFound'

const Root = ({
  Router, location, context, store,
}) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
          <Route exact path="/" component={MovieListPage} />
          <Route exact path="/search/:text" component={MovieListPage} />
          <Route path="/film/:id" component={MovieDetailPage} />
          <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default hot(module)(Root);

