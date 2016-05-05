import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Navbar from './navbar.jsx';

class App extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }
  render() {
    return (
      <div className="appclass">
        <Navbar />
        { this.props.children }
      </div>
    );
  }
}
App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
export default App;