import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: '/'};
    }
    handChange(value) {
    	this.context.router.push(value);
    	this.setState({tabIndex: value});
  	}

    render() {
        return (
        	<div className="navbar">
		        <Tabs value={this.state.tabIndex} onChange={this.handChange.bind(this)}>
		          <Tab label='Home'  value='/'/>
		          <Tab label='About'  value='/about'/>
		          <Tab label='Product'  value='/product'/>
		        </Tabs>
        	</div>
        )
    }
}
Navbar.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default Navbar;

