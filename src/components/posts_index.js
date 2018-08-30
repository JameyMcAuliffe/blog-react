import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {fetchPosts} from '../actions';

class PostsIndex extends Component {

	renderPosts() {
		//need to use lodash's map to deal with object
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		})
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {posts: state.posts};
}

//shortcut, passing in fetchPosts in an object achieves the same thing as mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
