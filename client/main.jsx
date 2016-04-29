import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Page from './page.jsx';

Meteor.startup(() => {
    render(<Page />, document.getElementById('app-container'));
});
