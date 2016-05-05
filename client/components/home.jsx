import React from 'react';
import {Link} from 'react-router';
import Navbar from './navbar.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="col-xs-2">
        		<h1>this is home</h1>
        	</div>
        );
    }
}
export default Home;
