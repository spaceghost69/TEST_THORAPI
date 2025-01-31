// defines the Redux Actions for Workflow

// Workflow

export const FETCH_WORKFLOW_REQUEST = 'FETCH_WORKFLOW_REQUEST';
export const FETCH_WORKFLOW_SUCCESS = 'FETCH_WORKFLOW_SUCCESS';
export const FETCH_WORKFLOW_FAILURE = 'FETCH_WORKFLOW_FAILURE';

export const ADD_WORKFLOW_REQUEST = 'ADD_WORKFLOW_REQUEST';
export const ADD_WORKFLOW_SUCCESS = 'ADD_WORKFLOW_SUCCESS';
export const ADD_WORKFLOW_FAILURE = 'ADD_WORKFLOW_FAILURE';

export const UPDATE_WORKFLOW_REQUEST = 'UPDATE_WORKFLOW_REQUEST';
export const UPDATE_WORKFLOW_SUCCESS = 'UPDATE_WORKFLOW_SUCCESS';
export const UPDATE_WORKFLOW_FAILURE = 'UPDATE_WORKFLOW_FAILURE';

export const DELETE_WORKFLOW_REQUEST = 'DELETE_WORKFLOW_REQUEST';
export const DELETE_WORKFLOW_SUCCESS = 'DELETE_WORKFLOW_SUCCESS';
export const DELETE_WORKFLOW_FAILURE = 'DELETE_WORKFLOW_FAILURE';

export const LIST_WORKFLOW_REQUEST = 'LIST_WORKFLOW_REQUEST';
export const LIST_WORKFLOW_SUCCESS = 'LIST_WORKFLOW_SUCCESS';
export const LIST_WORKFLOW_FAILURE = 'LIST_WORKFLOW_FAILURE';

export const addWorkflowRequest = () => ({
    type: ADD_WORKFLOW_REQUEST,
});

export const addWorkflowSuccess = (Workflows) => ({
    type: ADD_WORKFLOW_SUCCESS,
    payload: Workflows,
});

export const addWorkflowFailure = (error) => ({
    type: ADD_WORKFLOW_FAILURE,
    payload: error,
});


export const fetchWorkflowRequest = () => ({
    type: FETCH_WORKFLOW_REQUEST,
});

export const fetchWorkflowSuccess = (Workflows) => ({
    type: FETCH_WORKFLOW_SUCCESS,
    payload: Workflows,
});

export const fetchWorkflowFailure = (error) => ({
    type: FETCH_WORKFLOW_FAILURE,
    payload: error,
});

export const listWorkflowRequest = () => ({
    type: LIST_WORKFLOW_REQUEST,
});

export const listWorkflowSuccess = (Workflows) => ({
    type: LIST_WORKFLOW_SUCCESS,
    payload: Workflows,
});

export const listWorkflowFailure = (error) => ({
    type: LIST_WORKFLOW_FAILURE,
    payload: error,
});

export const updateWorkflowRequest = (Workflow) => ({
    type: UPDATE_WORKFLOW_REQUEST,
    payload: Workflow,
});

export const updateWorkflowSuccess = (Workflow) => ({
    type: UPDATE_WORKFLOW_SUCCESS,
    payload: Workflow,
});

export const updateWorkflowFailure = (error) => ({
    type: UPDATE_WORKFLOW_FAILURE,
    payload: error,
});

export const deleteWorkflowRequest = (Workflow) => ({
    type: DELETE_WORKFLOW_REQUEST,
    payload: Workflow,
});

export const deleteWorkflowSuccess = (Workflow) => ({
    type: DELETE_WORKFLOW_SUCCESS,
    payload: Workflow,
});

export const deleteWorkflowFailure = (error) => ({
    type: DELETE_WORKFLOW_FAILURE,
    payload: error,
});
