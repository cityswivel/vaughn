import * as actionType from '../actions/ActionType';

const initialState = {
		city: 'Sante Fe',
		state: 'NM',
		zip: '87505',
		tp_name: '315 Bistro',
	};

const testReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionType.CASS:
	return {
		...state,
		city: 'Los Angeles'
	}
    default:
      return state
  }
}

export default testReducer;
