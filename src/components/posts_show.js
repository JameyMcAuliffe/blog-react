import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost, deletePost} from '../actions/index';


class PostsShow extends Component {
	componentDidMount() {
		//provided by Router
		//params contains all wildcard objects in url
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
	}

	onDeleteClick() {
		const id = this.props.match.params.id;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});

	}

	render() {
		const {post} = this.props;

		if(!post) {
			return <div>Loading...</div>
		}

		return (
			<div>
				<Link to="/">Home</Link>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}>Delete
					</button>
				<h3>{post.title}</h3>
				<h6>{post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

//ownProps is object that is going to component
function mapStateToProps({posts}, ownProps) {
	return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
