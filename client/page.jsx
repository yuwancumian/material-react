import React from 'react';
import { Link } from 'react-router';
import Pageleft from './components/pageleft.jsx';
import Pageright from './components/pageright.jsx';


class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="wrapper">
        		<Pageleft />
        		<Pageright />
        	</div>
        )
    }
}

export default Page;
