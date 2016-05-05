import React from 'react';
import {Link} from 'react-router';
import Navbar from './navbar.jsx';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
        	<div className="col-xs-2" >
        		<h1>this is product</h1>
        		<Navbar />
                { this.props.children }
        	</div>
        );
    }
}
export default Product;
