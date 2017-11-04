import * as actionType from '../actions/ActionType';

const initialState = {
		filter_status: 'SHOW_ALL',
		payload: {}
	};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SHOW_ALL:
	return {
		...state,
		filter_status: 'SHOW_ALL'
	}
		case actionType.SHOW_FILTER:
			return {
				...state,
				filter_status: 'SHOW_FILTER',
				payload: action.payload,
			}
    default:
      return state
  }
}

export default filterReducer;
