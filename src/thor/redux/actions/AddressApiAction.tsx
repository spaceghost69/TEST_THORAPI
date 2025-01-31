// defines the Redux Actions for Address

// Address

export const FETCH_ADDRESS_REQUEST = 'FETCH_ADDRESS_REQUEST';
export const FETCH_ADDRESS_SUCCESS = 'FETCH_ADDRESS_SUCCESS';
export const FETCH_ADDRESS_FAILURE = 'FETCH_ADDRESS_FAILURE';

export const ADD_ADDRESS_REQUEST = 'ADD_ADDRESS_REQUEST';
export const ADD_ADDRESS_SUCCESS = 'ADD_ADDRESS_SUCCESS';
export const ADD_ADDRESS_FAILURE = 'ADD_ADDRESS_FAILURE';

export const UPDATE_ADDRESS_REQUEST = 'UPDATE_ADDRESS_REQUEST';
export const UPDATE_ADDRESS_SUCCESS = 'UPDATE_ADDRESS_SUCCESS';
export const UPDATE_ADDRESS_FAILURE = 'UPDATE_ADDRESS_FAILURE';

export const DELETE_ADDRESS_REQUEST = 'DELETE_ADDRESS_REQUEST';
export const DELETE_ADDRESS_SUCCESS = 'DELETE_ADDRESS_SUCCESS';
export const DELETE_ADDRESS_FAILURE = 'DELETE_ADDRESS_FAILURE';

export const LIST_ADDRESS_REQUEST = 'LIST_ADDRESS_REQUEST';
export const LIST_ADDRESS_SUCCESS = 'LIST_ADDRESS_SUCCESS';
export const LIST_ADDRESS_FAILURE = 'LIST_ADDRESS_FAILURE';

export const addAddressRequest = () => ({
    type: ADD_ADDRESS_REQUEST,
});

export const addAddressSuccess = (Addresss) => ({
    type: ADD_ADDRESS_SUCCESS,
    payload: Addresss,
});

export const addAddressFailure = (error) => ({
    type: ADD_ADDRESS_FAILURE,
    payload: error,
});


export const fetchAddressRequest = () => ({
    type: FETCH_ADDRESS_REQUEST,
});

export const fetchAddressSuccess = (Addresss) => ({
    type: FETCH_ADDRESS_SUCCESS,
    payload: Addresss,
});

export const fetchAddressFailure = (error) => ({
    type: FETCH_ADDRESS_FAILURE,
    payload: error,
});

export const listAddressRequest = () => ({
    type: LIST_ADDRESS_REQUEST,
});

export const listAddressSuccess = (Addresss) => ({
    type: LIST_ADDRESS_SUCCESS,
    payload: Addresss,
});

export const listAddressFailure = (error) => ({
    type: LIST_ADDRESS_FAILURE,
    payload: error,
});

export const updateAddressRequest = (Address) => ({
    type: UPDATE_ADDRESS_REQUEST,
    payload: Address,
});

export const updateAddressSuccess = (Address) => ({
    type: UPDATE_ADDRESS_SUCCESS,
    payload: Address,
});

export const updateAddressFailure = (error) => ({
    type: UPDATE_ADDRESS_FAILURE,
    payload: error,
});

export const deleteAddressRequest = (Address) => ({
    type: DELETE_ADDRESS_REQUEST,
    payload: Address,
});

export const deleteAddressSuccess = (Address) => ({
    type: DELETE_ADDRESS_SUCCESS,
    payload: Address,
});

export const deleteAddressFailure = (error) => ({
    type: DELETE_ADDRESS_FAILURE,
    payload: error,
});
