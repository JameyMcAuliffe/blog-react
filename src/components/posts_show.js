import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchPost} from '../actions/index';

class PostsShow extends Component {
	componentDidMount() {
		//provided by Router
		//params contains all wildcard objects in url
		const id = this.props.match.params.id;
		this.props.fetchPost(id);
	}

	render() {
		const {post} = this.props;

		if(!post) {
			return <div>Loading...</div>
		}

		return (
			<div>
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

export default connect(mapStateToProps, {fetchPost})(PostsShow);
