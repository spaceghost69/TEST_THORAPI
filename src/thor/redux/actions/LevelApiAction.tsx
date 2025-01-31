// defines the Redux Actions for Level

// Level

export const FETCH_LEVEL_REQUEST = 'FETCH_LEVEL_REQUEST';
export const FETCH_LEVEL_SUCCESS = 'FETCH_LEVEL_SUCCESS';
export const FETCH_LEVEL_FAILURE = 'FETCH_LEVEL_FAILURE';

export const ADD_LEVEL_REQUEST = 'ADD_LEVEL_REQUEST';
export const ADD_LEVEL_SUCCESS = 'ADD_LEVEL_SUCCESS';
export const ADD_LEVEL_FAILURE = 'ADD_LEVEL_FAILURE';

export const UPDATE_LEVEL_REQUEST = 'UPDATE_LEVEL_REQUEST';
export const UPDATE_LEVEL_SUCCESS = 'UPDATE_LEVEL_SUCCESS';
export const UPDATE_LEVEL_FAILURE = 'UPDATE_LEVEL_FAILURE';

export const DELETE_LEVEL_REQUEST = 'DELETE_LEVEL_REQUEST';
export const DELETE_LEVEL_SUCCESS = 'DELETE_LEVEL_SUCCESS';
export const DELETE_LEVEL_FAILURE = 'DELETE_LEVEL_FAILURE';

export const LIST_LEVEL_REQUEST = 'LIST_LEVEL_REQUEST';
export const LIST_LEVEL_SUCCESS = 'LIST_LEVEL_SUCCESS';
export const LIST_LEVEL_FAILURE = 'LIST_LEVEL_FAILURE';

export const addLevelRequest = () => ({
    type: ADD_LEVEL_REQUEST,
});

export const addLevelSuccess = (Levels) => ({
    type: ADD_LEVEL_SUCCESS,
    payload: Levels,
});

export const addLevelFailure = (error) => ({
    type: ADD_LEVEL_FAILURE,
    payload: error,
});


export const fetchLevelRequest = () => ({
    type: FETCH_LEVEL_REQUEST,
});

export const fetchLevelSuccess = (Levels) => ({
    type: FETCH_LEVEL_SUCCESS,
    payload: Levels,
});

export const fetchLevelFailure = (error) => ({
    type: FETCH_LEVEL_FAILURE,
    payload: error,
});

export const listLevelRequest = () => ({
    type: LIST_LEVEL_REQUEST,
});

export const listLevelSuccess = (Levels) => ({
    type: LIST_LEVEL_SUCCESS,
    payload: Levels,
});

export const listLevelFailure = (error) => ({
    type: LIST_LEVEL_FAILURE,
    payload: error,
});

export const updateLevelRequest = (Level) => ({
    type: UPDATE_LEVEL_REQUEST,
    payload: Level,
});

export const updateLevelSuccess = (Level) => ({
    type: UPDATE_LEVEL_SUCCESS,
    payload: Level,
});

export const updateLevelFailure = (error) => ({
    type: UPDATE_LEVEL_FAILURE,
    payload: error,
});

export const deleteLevelRequest = (Level) => ({
    type: DELETE_LEVEL_REQUEST,
    payload: Level,
});

export const deleteLevelSuccess = (Level) => ({
    type: DELETE_LEVEL_SUCCESS,
    payload: Level,
});

export const deleteLevelFailure = (error) => ({
    type: DELETE_LEVEL_FAILURE,
    payload: error,
});
