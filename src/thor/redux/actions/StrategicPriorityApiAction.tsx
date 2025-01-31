// defines the Redux Actions for StrategicPriority

// StrategicPriority

export const FETCH_STRATEGICPRIORITY_REQUEST = 'FETCH_STRATEGICPRIORITY_REQUEST';
export const FETCH_STRATEGICPRIORITY_SUCCESS = 'FETCH_STRATEGICPRIORITY_SUCCESS';
export const FETCH_STRATEGICPRIORITY_FAILURE = 'FETCH_STRATEGICPRIORITY_FAILURE';

export const ADD_STRATEGICPRIORITY_REQUEST = 'ADD_STRATEGICPRIORITY_REQUEST';
export const ADD_STRATEGICPRIORITY_SUCCESS = 'ADD_STRATEGICPRIORITY_SUCCESS';
export const ADD_STRATEGICPRIORITY_FAILURE = 'ADD_STRATEGICPRIORITY_FAILURE';

export const UPDATE_STRATEGICPRIORITY_REQUEST = 'UPDATE_STRATEGICPRIORITY_REQUEST';
export const UPDATE_STRATEGICPRIORITY_SUCCESS = 'UPDATE_STRATEGICPRIORITY_SUCCESS';
export const UPDATE_STRATEGICPRIORITY_FAILURE = 'UPDATE_STRATEGICPRIORITY_FAILURE';

export const DELETE_STRATEGICPRIORITY_REQUEST = 'DELETE_STRATEGICPRIORITY_REQUEST';
export const DELETE_STRATEGICPRIORITY_SUCCESS = 'DELETE_STRATEGICPRIORITY_SUCCESS';
export const DELETE_STRATEGICPRIORITY_FAILURE = 'DELETE_STRATEGICPRIORITY_FAILURE';

export const LIST_STRATEGICPRIORITY_REQUEST = 'LIST_STRATEGICPRIORITY_REQUEST';
export const LIST_STRATEGICPRIORITY_SUCCESS = 'LIST_STRATEGICPRIORITY_SUCCESS';
export const LIST_STRATEGICPRIORITY_FAILURE = 'LIST_STRATEGICPRIORITY_FAILURE';

export const addStrategicPriorityRequest = () => ({
    type: ADD_STRATEGICPRIORITY_REQUEST,
});

export const addStrategicPrioritySuccess = (StrategicPrioritys) => ({
    type: ADD_STRATEGICPRIORITY_SUCCESS,
    payload: StrategicPrioritys,
});

export const addStrategicPriorityFailure = (error) => ({
    type: ADD_STRATEGICPRIORITY_FAILURE,
    payload: error,
});


export const fetchStrategicPriorityRequest = () => ({
    type: FETCH_STRATEGICPRIORITY_REQUEST,
});

export const fetchStrategicPrioritySuccess = (StrategicPrioritys) => ({
    type: FETCH_STRATEGICPRIORITY_SUCCESS,
    payload: StrategicPrioritys,
});

export const fetchStrategicPriorityFailure = (error) => ({
    type: FETCH_STRATEGICPRIORITY_FAILURE,
    payload: error,
});

export const listStrategicPriorityRequest = () => ({
    type: LIST_STRATEGICPRIORITY_REQUEST,
});

export const listStrategicPrioritySuccess = (StrategicPrioritys) => ({
    type: LIST_STRATEGICPRIORITY_SUCCESS,
    payload: StrategicPrioritys,
});

export const listStrategicPriorityFailure = (error) => ({
    type: LIST_STRATEGICPRIORITY_FAILURE,
    payload: error,
});

export const updateStrategicPriorityRequest = (StrategicPriority) => ({
    type: UPDATE_STRATEGICPRIORITY_REQUEST,
    payload: StrategicPriority,
});

export const updateStrategicPrioritySuccess = (StrategicPriority) => ({
    type: UPDATE_STRATEGICPRIORITY_SUCCESS,
    payload: StrategicPriority,
});

export const updateStrategicPriorityFailure = (error) => ({
    type: UPDATE_STRATEGICPRIORITY_FAILURE,
    payload: error,
});

export const deleteStrategicPriorityRequest = (StrategicPriority) => ({
    type: DELETE_STRATEGICPRIORITY_REQUEST,
    payload: StrategicPriority,
});

export const deleteStrategicPrioritySuccess = (StrategicPriority) => ({
    type: DELETE_STRATEGICPRIORITY_SUCCESS,
    payload: StrategicPriority,
});

export const deleteStrategicPriorityFailure = (error) => ({
    type: DELETE_STRATEGICPRIORITY_FAILURE,
    payload: error,
});
