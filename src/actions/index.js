import * as actionType from './ActionType';

export const cass = () => ({
	type: actionType.CASS,
});
export function filterOn(payload) {

	return {
		type: actionType.SHOW_FILTER,
		payload
	};
}
export function filterOff() {
	return {
		type: actionType.SHOW_ALL
	};
}


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
	
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function imagesHasErrored(bool) {
    return {
        type: 'IMAGES_HAS_ERRORED',
        hasErrored: bool
    };
}
export function imagesIsLoading(bool) {
    return {
        type: 'IMAGES_IS_LOADING',
        isLoading: bool
    };
}
export function imagesFetchDataSuccess(images) {
    return {
        type: 'IMAGES_FETCH_DATA_SUCCESS',
        images
    };
}

export function imagesFetchData(url) {
    return (dispatch) => {
        dispatch(imagesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(imagesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((images) => dispatch(imagesFetchDataSuccess(images)))
            .catch(() => dispatch(imagesHasErrored(true)));
    };
}
