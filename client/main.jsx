import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './components/route.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';


Meteor.startup(() => {
	injectTapEventPlugin();
  	render(renderRoutes(), document.getElementById('app-container'));
});