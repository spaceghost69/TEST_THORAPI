// defines the Redux Actions for Solution

// Solution

export const FETCH_SOLUTION_REQUEST = 'FETCH_SOLUTION_REQUEST';
export const FETCH_SOLUTION_SUCCESS = 'FETCH_SOLUTION_SUCCESS';
export const FETCH_SOLUTION_FAILURE = 'FETCH_SOLUTION_FAILURE';

export const ADD_SOLUTION_REQUEST = 'ADD_SOLUTION_REQUEST';
export const ADD_SOLUTION_SUCCESS = 'ADD_SOLUTION_SUCCESS';
export const ADD_SOLUTION_FAILURE = 'ADD_SOLUTION_FAILURE';

export const UPDATE_SOLUTION_REQUEST = 'UPDATE_SOLUTION_REQUEST';
export const UPDATE_SOLUTION_SUCCESS = 'UPDATE_SOLUTION_SUCCESS';
export const UPDATE_SOLUTION_FAILURE = 'UPDATE_SOLUTION_FAILURE';

export const DELETE_SOLUTION_REQUEST = 'DELETE_SOLUTION_REQUEST';
export const DELETE_SOLUTION_SUCCESS = 'DELETE_SOLUTION_SUCCESS';
export const DELETE_SOLUTION_FAILURE = 'DELETE_SOLUTION_FAILURE';

export const LIST_SOLUTION_REQUEST = 'LIST_SOLUTION_REQUEST';
export const LIST_SOLUTION_SUCCESS = 'LIST_SOLUTION_SUCCESS';
export const LIST_SOLUTION_FAILURE = 'LIST_SOLUTION_FAILURE';

export const addSolutionRequest = () => ({
    type: ADD_SOLUTION_REQUEST,
});

export const addSolutionSuccess = (Solutions) => ({
    type: ADD_SOLUTION_SUCCESS,
    payload: Solutions,
});

export const addSolutionFailure = (error) => ({
    type: ADD_SOLUTION_FAILURE,
    payload: error,
});


export const fetchSolutionRequest = () => ({
    type: FETCH_SOLUTION_REQUEST,
});

export const fetchSolutionSuccess = (Solutions) => ({
    type: FETCH_SOLUTION_SUCCESS,
    payload: Solutions,
});

export const fetchSolutionFailure = (error) => ({
    type: FETCH_SOLUTION_FAILURE,
    payload: error,
});

export const listSolutionRequest = () => ({
    type: LIST_SOLUTION_REQUEST,
});

export const listSolutionSuccess = (Solutions) => ({
    type: LIST_SOLUTION_SUCCESS,
    payload: Solutions,
});

export const listSolutionFailure = (error) => ({
    type: LIST_SOLUTION_FAILURE,
    payload: error,
});

export const updateSolutionRequest = (Solution) => ({
    type: UPDATE_SOLUTION_REQUEST,
    payload: Solution,
});

export const updateSolutionSuccess = (Solution) => ({
    type: UPDATE_SOLUTION_SUCCESS,
    payload: Solution,
});

export const updateSolutionFailure = (error) => ({
    type: UPDATE_SOLUTION_FAILURE,
    payload: error,
});

export const deleteSolutionRequest = (Solution) => ({
    type: DELETE_SOLUTION_REQUEST,
    payload: Solution,
});

export const deleteSolutionSuccess = (Solution) => ({
    type: DELETE_SOLUTION_SUCCESS,
    payload: Solution,
});

export const deleteSolutionFailure = (error) => ({
    type: DELETE_SOLUTION_FAILURE,
    payload: error,
});
