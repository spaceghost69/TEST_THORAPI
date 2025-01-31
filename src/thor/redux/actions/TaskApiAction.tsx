// defines the Redux Actions for Task

// Task

export const FETCH_TASK_REQUEST = 'FETCH_TASK_REQUEST';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK_SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK_FAILURE';

export const ADD_TASK_REQUEST = 'ADD_TASK_REQUEST';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const LIST_TASK_REQUEST = 'LIST_TASK_REQUEST';
export const LIST_TASK_SUCCESS = 'LIST_TASK_SUCCESS';
export const LIST_TASK_FAILURE = 'LIST_TASK_FAILURE';

export const addTaskRequest = () => ({
    type: ADD_TASK_REQUEST,
});

export const addTaskSuccess = (Tasks) => ({
    type: ADD_TASK_SUCCESS,
    payload: Tasks,
});

export const addTaskFailure = (error) => ({
    type: ADD_TASK_FAILURE,
    payload: error,
});


export const fetchTaskRequest = () => ({
    type: FETCH_TASK_REQUEST,
});

export const fetchTaskSuccess = (Tasks) => ({
    type: FETCH_TASK_SUCCESS,
    payload: Tasks,
});

export const fetchTaskFailure = (error) => ({
    type: FETCH_TASK_FAILURE,
    payload: error,
});

export const listTaskRequest = () => ({
    type: LIST_TASK_REQUEST,
});

export const listTaskSuccess = (Tasks) => ({
    type: LIST_TASK_SUCCESS,
    payload: Tasks,
});

export const listTaskFailure = (error) => ({
    type: LIST_TASK_FAILURE,
    payload: error,
});

export const updateTaskRequest = (Task) => ({
    type: UPDATE_TASK_REQUEST,
    payload: Task,
});

export const updateTaskSuccess = (Task) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: Task,
});

export const updateTaskFailure = (error) => ({
    type: UPDATE_TASK_FAILURE,
    payload: error,
});

export const deleteTaskRequest = (Task) => ({
    type: DELETE_TASK_REQUEST,
    payload: Task,
});

export const deleteTaskSuccess = (Task) => ({
    type: DELETE_TASK_SUCCESS,
    payload: Task,
});

export const deleteTaskFailure = (error) => ({
    type: DELETE_TASK_FAILURE,
    payload: error,
});
