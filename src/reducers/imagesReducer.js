import * as actionType from '../actions/ActionType';

const initialState = {
                loaded: false,
        };

const imagesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
       case 'IMAGES_HAS_ERRORED':
            return action.hasErrored;
        case 'IMAGES_IS_LOADING':
            return action.isLoading;
        case 'IMAGES_FETCH_DATA_SUCCESS':
            return {
		...state,
		payload: action.images,
		loaded: true
	};
    default:
      return state
  }
}

export default imagesReducer;
