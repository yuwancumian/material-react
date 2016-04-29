import React from 'react';
class Comment extends React.Component {
	render() {
		return (
			<div>
				<div className = "comment-body">
				    {this.props.children}
				</div>
				<div className = "comment-author">
					-{this.props.author}
				</div>
			</div>
		);
	}
}

class CommentList extends React.Component {
	render() {
		return (
			<div className = "comment-list">
				<Comment author = "easier" >
					this is easier comment.
				</Comment>
				<Comment author = "royi" >
					this is royi comment.
				</Comment>
				<Comment author = "lin" >
					this is lin comment.
				</Comment>
			</div>
		);
	}

	// methods
}
class CommentForm extends React.Component {
	render() {
		return (
			<div className = "comment-form">
				commentForm
			</div>
		);
	}

	// methods
}
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        	<div className = "comment-box">
        		<h2> comments </h2>
        		<CommentList />
        		<CommentForm />
        	</div>
        )
    }
}

export default CommentBox;
