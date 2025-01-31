// defines the Redux Actions for Rating

// Rating

export const FETCH_RATING_REQUEST = 'FETCH_RATING_REQUEST';
export const FETCH_RATING_SUCCESS = 'FETCH_RATING_SUCCESS';
export const FETCH_RATING_FAILURE = 'FETCH_RATING_FAILURE';

export const ADD_RATING_REQUEST = 'ADD_RATING_REQUEST';
export const ADD_RATING_SUCCESS = 'ADD_RATING_SUCCESS';
export const ADD_RATING_FAILURE = 'ADD_RATING_FAILURE';

export const UPDATE_RATING_REQUEST = 'UPDATE_RATING_REQUEST';
export const UPDATE_RATING_SUCCESS = 'UPDATE_RATING_SUCCESS';
export const UPDATE_RATING_FAILURE = 'UPDATE_RATING_FAILURE';

export const DELETE_RATING_REQUEST = 'DELETE_RATING_REQUEST';
export const DELETE_RATING_SUCCESS = 'DELETE_RATING_SUCCESS';
export const DELETE_RATING_FAILURE = 'DELETE_RATING_FAILURE';

export const LIST_RATING_REQUEST = 'LIST_RATING_REQUEST';
export const LIST_RATING_SUCCESS = 'LIST_RATING_SUCCESS';
export const LIST_RATING_FAILURE = 'LIST_RATING_FAILURE';

export const addRatingRequest = () => ({
    type: ADD_RATING_REQUEST,
});

export const addRatingSuccess = (Ratings) => ({
    type: ADD_RATING_SUCCESS,
    payload: Ratings,
});

export const addRatingFailure = (error) => ({
    type: ADD_RATING_FAILURE,
    payload: error,
});


export const fetchRatingRequest = () => ({
    type: FETCH_RATING_REQUEST,
});

export const fetchRatingSuccess = (Ratings) => ({
    type: FETCH_RATING_SUCCESS,
    payload: Ratings,
});

export const fetchRatingFailure = (error) => ({
    type: FETCH_RATING_FAILURE,
    payload: error,
});

export const listRatingRequest = () => ({
    type: LIST_RATING_REQUEST,
});

export const listRatingSuccess = (Ratings) => ({
    type: LIST_RATING_SUCCESS,
    payload: Ratings,
});

export const listRatingFailure = (error) => ({
    type: LIST_RATING_FAILURE,
    payload: error,
});

export const updateRatingRequest = (Rating) => ({
    type: UPDATE_RATING_REQUEST,
    payload: Rating,
});

export const updateRatingSuccess = (Rating) => ({
    type: UPDATE_RATING_SUCCESS,
    payload: Rating,
});

export const updateRatingFailure = (error) => ({
    type: UPDATE_RATING_FAILURE,
    payload: error,
});

export const deleteRatingRequest = (Rating) => ({
    type: DELETE_RATING_REQUEST,
    payload: Rating,
});

export const deleteRatingSuccess = (Rating) => ({
    type: DELETE_RATING_SUCCESS,
    payload: Rating,
});

export const deleteRatingFailure = (error) => ({
    type: DELETE_RATING_FAILURE,
    payload: error,
});
