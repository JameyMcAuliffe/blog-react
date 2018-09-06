import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
	//field contains event handlers we need to wire up to jsx it's returning 
	renderTitleField(field) {
		return(
			<div>
				<input
					type="text" 
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field 
					name="title"
					component={this.renderTitleField}/>
			</form>
		);
		
	}
}

//reduxForm is similar to connect, communicates with formReducer
export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);
