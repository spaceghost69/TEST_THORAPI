// defines the Redux Actions for ChatMessage

// ChatMessage

export const FETCH_CHATMESSAGE_REQUEST = 'FETCH_CHATMESSAGE_REQUEST';
export const FETCH_CHATMESSAGE_SUCCESS = 'FETCH_CHATMESSAGE_SUCCESS';
export const FETCH_CHATMESSAGE_FAILURE = 'FETCH_CHATMESSAGE_FAILURE';

export const ADD_CHATMESSAGE_REQUEST = 'ADD_CHATMESSAGE_REQUEST';
export const ADD_CHATMESSAGE_SUCCESS = 'ADD_CHATMESSAGE_SUCCESS';
export const ADD_CHATMESSAGE_FAILURE = 'ADD_CHATMESSAGE_FAILURE';

export const UPDATE_CHATMESSAGE_REQUEST = 'UPDATE_CHATMESSAGE_REQUEST';
export const UPDATE_CHATMESSAGE_SUCCESS = 'UPDATE_CHATMESSAGE_SUCCESS';
export const UPDATE_CHATMESSAGE_FAILURE = 'UPDATE_CHATMESSAGE_FAILURE';

export const DELETE_CHATMESSAGE_REQUEST = 'DELETE_CHATMESSAGE_REQUEST';
export const DELETE_CHATMESSAGE_SUCCESS = 'DELETE_CHATMESSAGE_SUCCESS';
export const DELETE_CHATMESSAGE_FAILURE = 'DELETE_CHATMESSAGE_FAILURE';

export const LIST_CHATMESSAGE_REQUEST = 'LIST_CHATMESSAGE_REQUEST';
export const LIST_CHATMESSAGE_SUCCESS = 'LIST_CHATMESSAGE_SUCCESS';
export const LIST_CHATMESSAGE_FAILURE = 'LIST_CHATMESSAGE_FAILURE';

export const addChatMessageRequest = () => ({
    type: ADD_CHATMESSAGE_REQUEST,
});

export const addChatMessageSuccess = (ChatMessages) => ({
    type: ADD_CHATMESSAGE_SUCCESS,
    payload: ChatMessages,
});

export const addChatMessageFailure = (error) => ({
    type: ADD_CHATMESSAGE_FAILURE,
    payload: error,
});


export const fetchChatMessageRequest = () => ({
    type: FETCH_CHATMESSAGE_REQUEST,
});

export const fetchChatMessageSuccess = (ChatMessages) => ({
    type: FETCH_CHATMESSAGE_SUCCESS,
    payload: ChatMessages,
});

export const fetchChatMessageFailure = (error) => ({
    type: FETCH_CHATMESSAGE_FAILURE,
    payload: error,
});

export const listChatMessageRequest = () => ({
    type: LIST_CHATMESSAGE_REQUEST,
});

export const listChatMessageSuccess = (ChatMessages) => ({
    type: LIST_CHATMESSAGE_SUCCESS,
    payload: ChatMessages,
});

export const listChatMessageFailure = (error) => ({
    type: LIST_CHATMESSAGE_FAILURE,
    payload: error,
});

export const updateChatMessageRequest = (ChatMessage) => ({
    type: UPDATE_CHATMESSAGE_REQUEST,
    payload: ChatMessage,
});

export const updateChatMessageSuccess = (ChatMessage) => ({
    type: UPDATE_CHATMESSAGE_SUCCESS,
    payload: ChatMessage,
});

export const updateChatMessageFailure = (error) => ({
    type: UPDATE_CHATMESSAGE_FAILURE,
    payload: error,
});

export const deleteChatMessageRequest = (ChatMessage) => ({
    type: DELETE_CHATMESSAGE_REQUEST,
    payload: ChatMessage,
});

export const deleteChatMessageSuccess = (ChatMessage) => ({
    type: DELETE_CHATMESSAGE_SUCCESS,
    payload: ChatMessage,
});

export const deleteChatMessageFailure = (error) => ({
    type: DELETE_CHATMESSAGE_FAILURE,
    payload: error,
});
