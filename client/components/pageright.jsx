import React from 'react';
import CommentBox from './commentBox'

class Pageright extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className="col-md-10">
        		<CommentBox />
        	</div>
       	)
    }
}

export default Pageright;
