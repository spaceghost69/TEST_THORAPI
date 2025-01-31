// defines the Redux Actions for Goal

// Goal

export const FETCH_GOAL_REQUEST = 'FETCH_GOAL_REQUEST';
export const FETCH_GOAL_SUCCESS = 'FETCH_GOAL_SUCCESS';
export const FETCH_GOAL_FAILURE = 'FETCH_GOAL_FAILURE';

export const ADD_GOAL_REQUEST = 'ADD_GOAL_REQUEST';
export const ADD_GOAL_SUCCESS = 'ADD_GOAL_SUCCESS';
export const ADD_GOAL_FAILURE = 'ADD_GOAL_FAILURE';

export const UPDATE_GOAL_REQUEST = 'UPDATE_GOAL_REQUEST';
export const UPDATE_GOAL_SUCCESS = 'UPDATE_GOAL_SUCCESS';
export const UPDATE_GOAL_FAILURE = 'UPDATE_GOAL_FAILURE';

export const DELETE_GOAL_REQUEST = 'DELETE_GOAL_REQUEST';
export const DELETE_GOAL_SUCCESS = 'DELETE_GOAL_SUCCESS';
export const DELETE_GOAL_FAILURE = 'DELETE_GOAL_FAILURE';

export const LIST_GOAL_REQUEST = 'LIST_GOAL_REQUEST';
export const LIST_GOAL_SUCCESS = 'LIST_GOAL_SUCCESS';
export const LIST_GOAL_FAILURE = 'LIST_GOAL_FAILURE';

export const addGoalRequest = () => ({
    type: ADD_GOAL_REQUEST,
});

export const addGoalSuccess = (Goals) => ({
    type: ADD_GOAL_SUCCESS,
    payload: Goals,
});

export const addGoalFailure = (error) => ({
    type: ADD_GOAL_FAILURE,
    payload: error,
});


export const fetchGoalRequest = () => ({
    type: FETCH_GOAL_REQUEST,
});

export const fetchGoalSuccess = (Goals) => ({
    type: FETCH_GOAL_SUCCESS,
    payload: Goals,
});

export const fetchGoalFailure = (error) => ({
    type: FETCH_GOAL_FAILURE,
    payload: error,
});

export const listGoalRequest = () => ({
    type: LIST_GOAL_REQUEST,
});

export const listGoalSuccess = (Goals) => ({
    type: LIST_GOAL_SUCCESS,
    payload: Goals,
});

export const listGoalFailure = (error) => ({
    type: LIST_GOAL_FAILURE,
    payload: error,
});

export const updateGoalRequest = (Goal) => ({
    type: UPDATE_GOAL_REQUEST,
    payload: Goal,
});

export const updateGoalSuccess = (Goal) => ({
    type: UPDATE_GOAL_SUCCESS,
    payload: Goal,
});

export const updateGoalFailure = (error) => ({
    type: UPDATE_GOAL_FAILURE,
    payload: error,
});

export const deleteGoalRequest = (Goal) => ({
    type: DELETE_GOAL_REQUEST,
    payload: Goal,
});

export const deleteGoalSuccess = (Goal) => ({
    type: DELETE_GOAL_SUCCESS,
    payload: Goal,
});

export const deleteGoalFailure = (error) => ({
    type: DELETE_GOAL_FAILURE,
    payload: error,
});
