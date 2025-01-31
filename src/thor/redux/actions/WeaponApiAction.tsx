// defines the Redux Actions for Weapon

// Weapon

export const FETCH_WEAPON_REQUEST = 'FETCH_WEAPON_REQUEST';
export const FETCH_WEAPON_SUCCESS = 'FETCH_WEAPON_SUCCESS';
export const FETCH_WEAPON_FAILURE = 'FETCH_WEAPON_FAILURE';

export const ADD_WEAPON_REQUEST = 'ADD_WEAPON_REQUEST';
export const ADD_WEAPON_SUCCESS = 'ADD_WEAPON_SUCCESS';
export const ADD_WEAPON_FAILURE = 'ADD_WEAPON_FAILURE';

export const UPDATE_WEAPON_REQUEST = 'UPDATE_WEAPON_REQUEST';
export const UPDATE_WEAPON_SUCCESS = 'UPDATE_WEAPON_SUCCESS';
export const UPDATE_WEAPON_FAILURE = 'UPDATE_WEAPON_FAILURE';

export const DELETE_WEAPON_REQUEST = 'DELETE_WEAPON_REQUEST';
export const DELETE_WEAPON_SUCCESS = 'DELETE_WEAPON_SUCCESS';
export const DELETE_WEAPON_FAILURE = 'DELETE_WEAPON_FAILURE';

export const LIST_WEAPON_REQUEST = 'LIST_WEAPON_REQUEST';
export const LIST_WEAPON_SUCCESS = 'LIST_WEAPON_SUCCESS';
export const LIST_WEAPON_FAILURE = 'LIST_WEAPON_FAILURE';

export const addWeaponRequest = () => ({
    type: ADD_WEAPON_REQUEST,
});

export const addWeaponSuccess = (Weapons) => ({
    type: ADD_WEAPON_SUCCESS,
    payload: Weapons,
});

export const addWeaponFailure = (error) => ({
    type: ADD_WEAPON_FAILURE,
    payload: error,
});


export const fetchWeaponRequest = () => ({
    type: FETCH_WEAPON_REQUEST,
});

export const fetchWeaponSuccess = (Weapons) => ({
    type: FETCH_WEAPON_SUCCESS,
    payload: Weapons,
});

export const fetchWeaponFailure = (error) => ({
    type: FETCH_WEAPON_FAILURE,
    payload: error,
});

export const listWeaponRequest = () => ({
    type: LIST_WEAPON_REQUEST,
});

export const listWeaponSuccess = (Weapons) => ({
    type: LIST_WEAPON_SUCCESS,
    payload: Weapons,
});

export const listWeaponFailure = (error) => ({
    type: LIST_WEAPON_FAILURE,
    payload: error,
});

export const updateWeaponRequest = (Weapon) => ({
    type: UPDATE_WEAPON_REQUEST,
    payload: Weapon,
});

export const updateWeaponSuccess = (Weapon) => ({
    type: UPDATE_WEAPON_SUCCESS,
    payload: Weapon,
});

export const updateWeaponFailure = (error) => ({
    type: UPDATE_WEAPON_FAILURE,
    payload: error,
});

export const deleteWeaponRequest = (Weapon) => ({
    type: DELETE_WEAPON_REQUEST,
    payload: Weapon,
});

export const deleteWeaponSuccess = (Weapon) => ({
    type: DELETE_WEAPON_SUCCESS,
    payload: Weapon,
});

export const deleteWeaponFailure = (error) => ({
    type: DELETE_WEAPON_FAILURE,
    payload: error,
});
