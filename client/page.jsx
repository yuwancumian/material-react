import React from 'react';
import { Link } from 'react-router';
import Home from './components/home.jsx';
import Pageright from './components/pageright.jsx';


class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="wrapper">
        		<Home />
        	</div>
        )
    }
}

export default Page;
