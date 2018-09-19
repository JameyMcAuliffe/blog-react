import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {createPost} from '../actions/index';

class PostsNew extends Component {

	//field contains event handlers we need to wire up to jsx it's returning 
	renderField(field) {
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
		
		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text" 
					{...field.input}
				/>
				<div className="text-help">
					{field.meta.touched ? field.meta.error : ''}
				</div>
			</div>
		);
	}

	//values come from the submitted form
	onSubmit(values) {
		this.props.createPost(values);
	}

	render() {
		//handleSubmit gets added from wiring up reduxForm
		const {handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title:" 
					name="title"
					component={this.renderField}/>
				<Field 
					label="Categories:"
					name="categories"
					component={this.renderField}/>
				<Field 
					label="Content:"
					name="content"
					component={this.renderField}/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
		
	}
}

//values is an object containting all different values a user has entered into a form
function validate(values) {
	const errors = {};

	//set the property to the name of the input you want to connect
	if(!values.title) {
		errors.title= "*Please enter a title";
	}

	if(!values.categories) {
		errors.categories = "*Enter at least one category";
	}

	if(!values.content) {
		errors.content = "*Please enter some content";
	}

	//if errors is empty, form is fine to submit
	return errors;
}

//reduxForm is similar to connect, communicates with formReducer
export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, {createPost})(PostsNew)
);
