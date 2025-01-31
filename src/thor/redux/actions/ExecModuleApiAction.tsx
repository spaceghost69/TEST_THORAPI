// defines the Redux Actions for ExecModule

// ExecModule

export const FETCH_EXECMODULE_REQUEST = 'FETCH_EXECMODULE_REQUEST';
export const FETCH_EXECMODULE_SUCCESS = 'FETCH_EXECMODULE_SUCCESS';
export const FETCH_EXECMODULE_FAILURE = 'FETCH_EXECMODULE_FAILURE';

export const ADD_EXECMODULE_REQUEST = 'ADD_EXECMODULE_REQUEST';
export const ADD_EXECMODULE_SUCCESS = 'ADD_EXECMODULE_SUCCESS';
export const ADD_EXECMODULE_FAILURE = 'ADD_EXECMODULE_FAILURE';

export const UPDATE_EXECMODULE_REQUEST = 'UPDATE_EXECMODULE_REQUEST';
export const UPDATE_EXECMODULE_SUCCESS = 'UPDATE_EXECMODULE_SUCCESS';
export const UPDATE_EXECMODULE_FAILURE = 'UPDATE_EXECMODULE_FAILURE';

export const DELETE_EXECMODULE_REQUEST = 'DELETE_EXECMODULE_REQUEST';
export const DELETE_EXECMODULE_SUCCESS = 'DELETE_EXECMODULE_SUCCESS';
export const DELETE_EXECMODULE_FAILURE = 'DELETE_EXECMODULE_FAILURE';

export const LIST_EXECMODULE_REQUEST = 'LIST_EXECMODULE_REQUEST';
export const LIST_EXECMODULE_SUCCESS = 'LIST_EXECMODULE_SUCCESS';
export const LIST_EXECMODULE_FAILURE = 'LIST_EXECMODULE_FAILURE';

export const addExecModuleRequest = () => ({
    type: ADD_EXECMODULE_REQUEST,
});

export const addExecModuleSuccess = (ExecModules) => ({
    type: ADD_EXECMODULE_SUCCESS,
    payload: ExecModules,
});

export const addExecModuleFailure = (error) => ({
    type: ADD_EXECMODULE_FAILURE,
    payload: error,
});


export const fetchExecModuleRequest = () => ({
    type: FETCH_EXECMODULE_REQUEST,
});

export const fetchExecModuleSuccess = (ExecModules) => ({
    type: FETCH_EXECMODULE_SUCCESS,
    payload: ExecModules,
});

export const fetchExecModuleFailure = (error) => ({
    type: FETCH_EXECMODULE_FAILURE,
    payload: error,
});

export const listExecModuleRequest = () => ({
    type: LIST_EXECMODULE_REQUEST,
});

export const listExecModuleSuccess = (ExecModules) => ({
    type: LIST_EXECMODULE_SUCCESS,
    payload: ExecModules,
});

export const listExecModuleFailure = (error) => ({
    type: LIST_EXECMODULE_FAILURE,
    payload: error,
});

export const updateExecModuleRequest = (ExecModule) => ({
    type: UPDATE_EXECMODULE_REQUEST,
    payload: ExecModule,
});

export const updateExecModuleSuccess = (ExecModule) => ({
    type: UPDATE_EXECMODULE_SUCCESS,
    payload: ExecModule,
});

export const updateExecModuleFailure = (error) => ({
    type: UPDATE_EXECMODULE_FAILURE,
    payload: error,
});

export const deleteExecModuleRequest = (ExecModule) => ({
    type: DELETE_EXECMODULE_REQUEST,
    payload: ExecModule,
});

export const deleteExecModuleSuccess = (ExecModule) => ({
    type: DELETE_EXECMODULE_SUCCESS,
    payload: ExecModule,
});

export const deleteExecModuleFailure = (error) => ({
    type: DELETE_EXECMODULE_FAILURE,
    payload: error,
});
