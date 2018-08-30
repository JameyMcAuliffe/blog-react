import _ from 'lodash';
import {FETCH_POSTS} from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POSTS:
			//takes an array and returns an object with keys specified by the string arg
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}
