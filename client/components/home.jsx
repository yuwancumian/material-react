import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="col-xs-2">
        		<h1>this is home</h1>
        		<Link to ="/">home</Link>
        		<Link to ="/about">about</Link>
        		<Link to = "/product/">product</Link>
        	</div>
        );
    }
}
export default Home;
