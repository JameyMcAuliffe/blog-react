import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POST:
			const post = action.payload.data;
			//take all existing state, put into this new object
			//2nd arg creates a prop called id
			return {...state, [action.payload.data.id]: post}
		case FETCH_POSTS:
			//takes an array and returns an object with keys specified by the string arg
			return _.mapKeys(action.payload.data, 'id');
		case DELETE_POST:
			return _.omit(state, action.payload)
		default:
			return state;
	}
}
