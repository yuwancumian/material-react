import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './components/route.jsx';

import Page from './page.jsx';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app-container'));
});