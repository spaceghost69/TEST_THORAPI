// defines the Redux Actions for Product

// Product

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const LIST_PRODUCT_REQUEST = 'LIST_PRODUCT_REQUEST';
export const LIST_PRODUCT_SUCCESS = 'LIST_PRODUCT_SUCCESS';
export const LIST_PRODUCT_FAILURE = 'LIST_PRODUCT_FAILURE';

export const addProductRequest = () => ({
    type: ADD_PRODUCT_REQUEST,
});

export const addProductSuccess = (Products) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: Products,
});

export const addProductFailure = (error) => ({
    type: ADD_PRODUCT_FAILURE,
    payload: error,
});


export const fetchProductRequest = () => ({
    type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (Products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: Products,
});

export const fetchProductFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});

export const listProductRequest = () => ({
    type: LIST_PRODUCT_REQUEST,
});

export const listProductSuccess = (Products) => ({
    type: LIST_PRODUCT_SUCCESS,
    payload: Products,
});

export const listProductFailure = (error) => ({
    type: LIST_PRODUCT_FAILURE,
    payload: error,
});

export const updateProductRequest = (Product) => ({
    type: UPDATE_PRODUCT_REQUEST,
    payload: Product,
});

export const updateProductSuccess = (Product) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: Product,
});

export const updateProductFailure = (error) => ({
    type: UPDATE_PRODUCT_FAILURE,
    payload: error,
});

export const deleteProductRequest = (Product) => ({
    type: DELETE_PRODUCT_REQUEST,
    payload: Product,
});

export const deleteProductSuccess = (Product) => ({
    type: DELETE_PRODUCT_SUCCESS,
    payload: Product,
});

export const deleteProductFailure = (error) => ({
    type: DELETE_PRODUCT_FAILURE,
    payload: error,
});
