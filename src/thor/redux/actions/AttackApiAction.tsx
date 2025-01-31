// defines the Redux Actions for Attack

// Attack

export const FETCH_ATTACK_REQUEST = 'FETCH_ATTACK_REQUEST';
export const FETCH_ATTACK_SUCCESS = 'FETCH_ATTACK_SUCCESS';
export const FETCH_ATTACK_FAILURE = 'FETCH_ATTACK_FAILURE';

export const ADD_ATTACK_REQUEST = 'ADD_ATTACK_REQUEST';
export const ADD_ATTACK_SUCCESS = 'ADD_ATTACK_SUCCESS';
export const ADD_ATTACK_FAILURE = 'ADD_ATTACK_FAILURE';

export const UPDATE_ATTACK_REQUEST = 'UPDATE_ATTACK_REQUEST';
export const UPDATE_ATTACK_SUCCESS = 'UPDATE_ATTACK_SUCCESS';
export const UPDATE_ATTACK_FAILURE = 'UPDATE_ATTACK_FAILURE';

export const DELETE_ATTACK_REQUEST = 'DELETE_ATTACK_REQUEST';
export const DELETE_ATTACK_SUCCESS = 'DELETE_ATTACK_SUCCESS';
export const DELETE_ATTACK_FAILURE = 'DELETE_ATTACK_FAILURE';

export const LIST_ATTACK_REQUEST = 'LIST_ATTACK_REQUEST';
export const LIST_ATTACK_SUCCESS = 'LIST_ATTACK_SUCCESS';
export const LIST_ATTACK_FAILURE = 'LIST_ATTACK_FAILURE';

export const addAttackRequest = () => ({
    type: ADD_ATTACK_REQUEST,
});

export const addAttackSuccess = (Attacks) => ({
    type: ADD_ATTACK_SUCCESS,
    payload: Attacks,
});

export const addAttackFailure = (error) => ({
    type: ADD_ATTACK_FAILURE,
    payload: error,
});


export const fetchAttackRequest = () => ({
    type: FETCH_ATTACK_REQUEST,
});

export const fetchAttackSuccess = (Attacks) => ({
    type: FETCH_ATTACK_SUCCESS,
    payload: Attacks,
});

export const fetchAttackFailure = (error) => ({
    type: FETCH_ATTACK_FAILURE,
    payload: error,
});

export const listAttackRequest = () => ({
    type: LIST_ATTACK_REQUEST,
});

export const listAttackSuccess = (Attacks) => ({
    type: LIST_ATTACK_SUCCESS,
    payload: Attacks,
});

export const listAttackFailure = (error) => ({
    type: LIST_ATTACK_FAILURE,
    payload: error,
});

export const updateAttackRequest = (Attack) => ({
    type: UPDATE_ATTACK_REQUEST,
    payload: Attack,
});

export const updateAttackSuccess = (Attack) => ({
    type: UPDATE_ATTACK_SUCCESS,
    payload: Attack,
});

export const updateAttackFailure = (error) => ({
    type: UPDATE_ATTACK_FAILURE,
    payload: error,
});

export const deleteAttackRequest = (Attack) => ({
    type: DELETE_ATTACK_REQUEST,
    payload: Attack,
});

export const deleteAttackSuccess = (Attack) => ({
    type: DELETE_ATTACK_SUCCESS,
    payload: Attack,
});

export const deleteAttackFailure = (error) => ({
    type: DELETE_ATTACK_FAILURE,
    payload: error,
});
