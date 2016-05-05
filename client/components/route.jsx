import React from 'react';
import { Router,IndexRoute, Route, browserHistory } from 'react-router'

import Home from './home.jsx';
import Product from './product.jsx';
import About from './about.jsx';
import App from './app.jsx';

export const renderRoutes = () => (
   	<Router history={browserHistory}>
	    <Route path='/' component={App}>
	        <IndexRoute component={Home} />
	        <Route path="/product" component={Product} />
	        <Route path="/about" component={About} />
	    </Route>
  	</Router>
);