import React from 'react';
import {Link} from 'react-router';

class Product extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var styles   = {
            root:{
                color: 'white',
                fontSize: 24
            },
            list:{
                display: 'inline-block',
                paddingRight: 12
            }
        };
        return (
        	<div className="col-xs-2" style={styles}>
        		<h1>this is product</h1>
        		<Link to ="/" style={styles.list}>home</Link>
        		<Link to ="/about" style={styles.list}>about</Link>
        		<Link to = "/product/" style={styles.list}>product</Link>
        	</div>
        );
    }
}
export default Product;
