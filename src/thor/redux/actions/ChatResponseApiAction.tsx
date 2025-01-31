// defines the Redux Actions for ChatResponse

// ChatResponse

export const FETCH_CHATRESPONSE_REQUEST = 'FETCH_CHATRESPONSE_REQUEST';
export const FETCH_CHATRESPONSE_SUCCESS = 'FETCH_CHATRESPONSE_SUCCESS';
export const FETCH_CHATRESPONSE_FAILURE = 'FETCH_CHATRESPONSE_FAILURE';

export const ADD_CHATRESPONSE_REQUEST = 'ADD_CHATRESPONSE_REQUEST';
export const ADD_CHATRESPONSE_SUCCESS = 'ADD_CHATRESPONSE_SUCCESS';
export const ADD_CHATRESPONSE_FAILURE = 'ADD_CHATRESPONSE_FAILURE';

export const UPDATE_CHATRESPONSE_REQUEST = 'UPDATE_CHATRESPONSE_REQUEST';
export const UPDATE_CHATRESPONSE_SUCCESS = 'UPDATE_CHATRESPONSE_SUCCESS';
export const UPDATE_CHATRESPONSE_FAILURE = 'UPDATE_CHATRESPONSE_FAILURE';

export const DELETE_CHATRESPONSE_REQUEST = 'DELETE_CHATRESPONSE_REQUEST';
export const DELETE_CHATRESPONSE_SUCCESS = 'DELETE_CHATRESPONSE_SUCCESS';
export const DELETE_CHATRESPONSE_FAILURE = 'DELETE_CHATRESPONSE_FAILURE';

export const LIST_CHATRESPONSE_REQUEST = 'LIST_CHATRESPONSE_REQUEST';
export const LIST_CHATRESPONSE_SUCCESS = 'LIST_CHATRESPONSE_SUCCESS';
export const LIST_CHATRESPONSE_FAILURE = 'LIST_CHATRESPONSE_FAILURE';

export const addChatResponseRequest = () => ({
    type: ADD_CHATRESPONSE_REQUEST,
});

export const addChatResponseSuccess = (ChatResponses) => ({
    type: ADD_CHATRESPONSE_SUCCESS,
    payload: ChatResponses,
});

export const addChatResponseFailure = (error) => ({
    type: ADD_CHATRESPONSE_FAILURE,
    payload: error,
});


export const fetchChatResponseRequest = () => ({
    type: FETCH_CHATRESPONSE_REQUEST,
});

export const fetchChatResponseSuccess = (ChatResponses) => ({
    type: FETCH_CHATRESPONSE_SUCCESS,
    payload: ChatResponses,
});

export const fetchChatResponseFailure = (error) => ({
    type: FETCH_CHATRESPONSE_FAILURE,
    payload: error,
});

export const listChatResponseRequest = () => ({
    type: LIST_CHATRESPONSE_REQUEST,
});

export const listChatResponseSuccess = (ChatResponses) => ({
    type: LIST_CHATRESPONSE_SUCCESS,
    payload: ChatResponses,
});

export const listChatResponseFailure = (error) => ({
    type: LIST_CHATRESPONSE_FAILURE,
    payload: error,
});

export const updateChatResponseRequest = (ChatResponse) => ({
    type: UPDATE_CHATRESPONSE_REQUEST,
    payload: ChatResponse,
});

export const updateChatResponseSuccess = (ChatResponse) => ({
    type: UPDATE_CHATRESPONSE_SUCCESS,
    payload: ChatResponse,
});

export const updateChatResponseFailure = (error) => ({
    type: UPDATE_CHATRESPONSE_FAILURE,
    payload: error,
});

export const deleteChatResponseRequest = (ChatResponse) => ({
    type: DELETE_CHATRESPONSE_REQUEST,
    payload: ChatResponse,
});

export const deleteChatResponseSuccess = (ChatResponse) => ({
    type: DELETE_CHATRESPONSE_SUCCESS,
    payload: ChatResponse,
});

export const deleteChatResponseFailure = (error) => ({
    type: DELETE_CHATRESPONSE_FAILURE,
    payload: error,
});
