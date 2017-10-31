
import * as actionType from '../actions/ActionType';

const initialState = {
                loaded: false,
        };

const fetchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
       case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return {
		...state,
		payload: action.items,
		loaded: true
	};
    default:
      return state
  }
}

export default fetchReducer;


