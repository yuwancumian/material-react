import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Home from './home.jsx';
import Product from './product.jsx';
import About from './about.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path="/product" component={Product} />
    <Route path="/about" component={About} />
  </Router>
);