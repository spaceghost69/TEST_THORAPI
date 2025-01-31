// defines the Redux Actions for OasServer

// OasServer

export const FETCH_OASSERVER_REQUEST = 'FETCH_OASSERVER_REQUEST';
export const FETCH_OASSERVER_SUCCESS = 'FETCH_OASSERVER_SUCCESS';
export const FETCH_OASSERVER_FAILURE = 'FETCH_OASSERVER_FAILURE';

export const ADD_OASSERVER_REQUEST = 'ADD_OASSERVER_REQUEST';
export const ADD_OASSERVER_SUCCESS = 'ADD_OASSERVER_SUCCESS';
export const ADD_OASSERVER_FAILURE = 'ADD_OASSERVER_FAILURE';

export const UPDATE_OASSERVER_REQUEST = 'UPDATE_OASSERVER_REQUEST';
export const UPDATE_OASSERVER_SUCCESS = 'UPDATE_OASSERVER_SUCCESS';
export const UPDATE_OASSERVER_FAILURE = 'UPDATE_OASSERVER_FAILURE';

export const DELETE_OASSERVER_REQUEST = 'DELETE_OASSERVER_REQUEST';
export const DELETE_OASSERVER_SUCCESS = 'DELETE_OASSERVER_SUCCESS';
export const DELETE_OASSERVER_FAILURE = 'DELETE_OASSERVER_FAILURE';

export const LIST_OASSERVER_REQUEST = 'LIST_OASSERVER_REQUEST';
export const LIST_OASSERVER_SUCCESS = 'LIST_OASSERVER_SUCCESS';
export const LIST_OASSERVER_FAILURE = 'LIST_OASSERVER_FAILURE';

export const addOasServerRequest = () => ({
    type: ADD_OASSERVER_REQUEST,
});

export const addOasServerSuccess = (OasServers) => ({
    type: ADD_OASSERVER_SUCCESS,
    payload: OasServers,
});

export const addOasServerFailure = (error) => ({
    type: ADD_OASSERVER_FAILURE,
    payload: error,
});


export const fetchOasServerRequest = () => ({
    type: FETCH_OASSERVER_REQUEST,
});

export const fetchOasServerSuccess = (OasServers) => ({
    type: FETCH_OASSERVER_SUCCESS,
    payload: OasServers,
});

export const fetchOasServerFailure = (error) => ({
    type: FETCH_OASSERVER_FAILURE,
    payload: error,
});

export const listOasServerRequest = () => ({
    type: LIST_OASSERVER_REQUEST,
});

export const listOasServerSuccess = (OasServers) => ({
    type: LIST_OASSERVER_SUCCESS,
    payload: OasServers,
});

export const listOasServerFailure = (error) => ({
    type: LIST_OASSERVER_FAILURE,
    payload: error,
});

export const updateOasServerRequest = (OasServer) => ({
    type: UPDATE_OASSERVER_REQUEST,
    payload: OasServer,
});

export const updateOasServerSuccess = (OasServer) => ({
    type: UPDATE_OASSERVER_SUCCESS,
    payload: OasServer,
});

export const updateOasServerFailure = (error) => ({
    type: UPDATE_OASSERVER_FAILURE,
    payload: error,
});

export const deleteOasServerRequest = (OasServer) => ({
    type: DELETE_OASSERVER_REQUEST,
    payload: OasServer,
});

export const deleteOasServerSuccess = (OasServer) => ({
    type: DELETE_OASSERVER_SUCCESS,
    payload: OasServer,
});

export const deleteOasServerFailure = (error) => ({
    type: DELETE_OASSERVER_FAILURE,
    payload: error,
});
