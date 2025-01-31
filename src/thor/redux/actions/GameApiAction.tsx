// defines the Redux Actions for Game

// Game

export const FETCH_GAME_REQUEST = 'FETCH_GAME_REQUEST';
export const FETCH_GAME_SUCCESS = 'FETCH_GAME_SUCCESS';
export const FETCH_GAME_FAILURE = 'FETCH_GAME_FAILURE';

export const ADD_GAME_REQUEST = 'ADD_GAME_REQUEST';
export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS';
export const ADD_GAME_FAILURE = 'ADD_GAME_FAILURE';

export const UPDATE_GAME_REQUEST = 'UPDATE_GAME_REQUEST';
export const UPDATE_GAME_SUCCESS = 'UPDATE_GAME_SUCCESS';
export const UPDATE_GAME_FAILURE = 'UPDATE_GAME_FAILURE';

export const DELETE_GAME_REQUEST = 'DELETE_GAME_REQUEST';
export const DELETE_GAME_SUCCESS = 'DELETE_GAME_SUCCESS';
export const DELETE_GAME_FAILURE = 'DELETE_GAME_FAILURE';

export const LIST_GAME_REQUEST = 'LIST_GAME_REQUEST';
export const LIST_GAME_SUCCESS = 'LIST_GAME_SUCCESS';
export const LIST_GAME_FAILURE = 'LIST_GAME_FAILURE';

export const addGameRequest = () => ({
    type: ADD_GAME_REQUEST,
});

export const addGameSuccess = (Games) => ({
    type: ADD_GAME_SUCCESS,
    payload: Games,
});

export const addGameFailure = (error) => ({
    type: ADD_GAME_FAILURE,
    payload: error,
});


export const fetchGameRequest = () => ({
    type: FETCH_GAME_REQUEST,
});

export const fetchGameSuccess = (Games) => ({
    type: FETCH_GAME_SUCCESS,
    payload: Games,
});

export const fetchGameFailure = (error) => ({
    type: FETCH_GAME_FAILURE,
    payload: error,
});

export const listGameRequest = () => ({
    type: LIST_GAME_REQUEST,
});

export const listGameSuccess = (Games) => ({
    type: LIST_GAME_SUCCESS,
    payload: Games,
});

export const listGameFailure = (error) => ({
    type: LIST_GAME_FAILURE,
    payload: error,
});

export const updateGameRequest = (Game) => ({
    type: UPDATE_GAME_REQUEST,
    payload: Game,
});

export const updateGameSuccess = (Game) => ({
    type: UPDATE_GAME_SUCCESS,
    payload: Game,
});

export const updateGameFailure = (error) => ({
    type: UPDATE_GAME_FAILURE,
    payload: error,
});

export const deleteGameRequest = (Game) => ({
    type: DELETE_GAME_REQUEST,
    payload: Game,
});

export const deleteGameSuccess = (Game) => ({
    type: DELETE_GAME_SUCCESS,
    payload: Game,
});

export const deleteGameFailure = (error) => ({
    type: DELETE_GAME_FAILURE,
    payload: error,
});
