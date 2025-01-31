// defines the Redux Actions for WorkflowState

// WorkflowState

export const FETCH_WORKFLOWSTATE_REQUEST = 'FETCH_WORKFLOWSTATE_REQUEST';
export const FETCH_WORKFLOWSTATE_SUCCESS = 'FETCH_WORKFLOWSTATE_SUCCESS';
export const FETCH_WORKFLOWSTATE_FAILURE = 'FETCH_WORKFLOWSTATE_FAILURE';

export const ADD_WORKFLOWSTATE_REQUEST = 'ADD_WORKFLOWSTATE_REQUEST';
export const ADD_WORKFLOWSTATE_SUCCESS = 'ADD_WORKFLOWSTATE_SUCCESS';
export const ADD_WORKFLOWSTATE_FAILURE = 'ADD_WORKFLOWSTATE_FAILURE';

export const UPDATE_WORKFLOWSTATE_REQUEST = 'UPDATE_WORKFLOWSTATE_REQUEST';
export const UPDATE_WORKFLOWSTATE_SUCCESS = 'UPDATE_WORKFLOWSTATE_SUCCESS';
export const UPDATE_WORKFLOWSTATE_FAILURE = 'UPDATE_WORKFLOWSTATE_FAILURE';

export const DELETE_WORKFLOWSTATE_REQUEST = 'DELETE_WORKFLOWSTATE_REQUEST';
export const DELETE_WORKFLOWSTATE_SUCCESS = 'DELETE_WORKFLOWSTATE_SUCCESS';
export const DELETE_WORKFLOWSTATE_FAILURE = 'DELETE_WORKFLOWSTATE_FAILURE';

export const LIST_WORKFLOWSTATE_REQUEST = 'LIST_WORKFLOWSTATE_REQUEST';
export const LIST_WORKFLOWSTATE_SUCCESS = 'LIST_WORKFLOWSTATE_SUCCESS';
export const LIST_WORKFLOWSTATE_FAILURE = 'LIST_WORKFLOWSTATE_FAILURE';

export const addWorkflowStateRequest = () => ({
    type: ADD_WORKFLOWSTATE_REQUEST,
});

export const addWorkflowStateSuccess = (WorkflowStates) => ({
    type: ADD_WORKFLOWSTATE_SUCCESS,
    payload: WorkflowStates,
});

export const addWorkflowStateFailure = (error) => ({
    type: ADD_WORKFLOWSTATE_FAILURE,
    payload: error,
});


export const fetchWorkflowStateRequest = () => ({
    type: FETCH_WORKFLOWSTATE_REQUEST,
});

export const fetchWorkflowStateSuccess = (WorkflowStates) => ({
    type: FETCH_WORKFLOWSTATE_SUCCESS,
    payload: WorkflowStates,
});

export const fetchWorkflowStateFailure = (error) => ({
    type: FETCH_WORKFLOWSTATE_FAILURE,
    payload: error,
});

export const listWorkflowStateRequest = () => ({
    type: LIST_WORKFLOWSTATE_REQUEST,
});

export const listWorkflowStateSuccess = (WorkflowStates) => ({
    type: LIST_WORKFLOWSTATE_SUCCESS,
    payload: WorkflowStates,
});

export const listWorkflowStateFailure = (error) => ({
    type: LIST_WORKFLOWSTATE_FAILURE,
    payload: error,
});

export const updateWorkflowStateRequest = (WorkflowState) => ({
    type: UPDATE_WORKFLOWSTATE_REQUEST,
    payload: WorkflowState,
});

export const updateWorkflowStateSuccess = (WorkflowState) => ({
    type: UPDATE_WORKFLOWSTATE_SUCCESS,
    payload: WorkflowState,
});

export const updateWorkflowStateFailure = (error) => ({
    type: UPDATE_WORKFLOWSTATE_FAILURE,
    payload: error,
});

export const deleteWorkflowStateRequest = (WorkflowState) => ({
    type: DELETE_WORKFLOWSTATE_REQUEST,
    payload: WorkflowState,
});

export const deleteWorkflowStateSuccess = (WorkflowState) => ({
    type: DELETE_WORKFLOWSTATE_SUCCESS,
    payload: WorkflowState,
});

export const deleteWorkflowStateFailure = (error) => ({
    type: DELETE_WORKFLOWSTATE_FAILURE,
    payload: error,
});
