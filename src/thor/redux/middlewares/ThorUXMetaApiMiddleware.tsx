
import { 
    getThorUXMeta, 
    postThorUXMeta,
    getThorUXMetaList , 
    deleteThorUXMeta , 
    updateThorUXMeta 
} from '../../api';

import {

    ADD_THORUXMETA_REQUEST,
    FETCH_THORUXMETA_REQUEST,
    LIST_THORUXMETA_REQUEST,
    UPDATE_THORUXMETA_REQUEST,
    DELETE_THORUXMETA_REQUEST,

    addThorUXMetaFailure,
    addThorUXMetaSuccess,

    fetchThorUXMetaFailure,
    fetchThorUXMetaSuccess,
    
    listThorUXMetaFailure,
    listThorUXMetaSuccess,

    updateThorUXMetaFailure,
    updateThorUXMetaSuccess,
    
    deleteThorUXMetaFailure,
    deleteThorUXMetaSuccess,
    
} from '../actions/ThorUXMetaApiAction';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apiREST.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: ThorUXMeta
*/

export const ThorUXMetaMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("ThorUXMeta MIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {

        case ADD_THORUXMETA_REQUEST:
            try {
                const response = postThorUXMeta(action.payload);
                dispatch(addThorUXMetaSuccess(response.body));
            } catch (error) {
                dispatch(addThorUXMetaFailure(error.message));
            }
            break;

        case LIST_THORUXMETA_REQUEST:
            try {
                const response = getThorUXMetaList();
                dispatch(listThorUXMetaSuccess(response.body));
            } catch (error) {
                dispatch(listThorUXMetaFailure(error.message));
            }
            break;


        case FETCH_THORUXMETA_REQUEST:
            try {
                const response = getThorUXMeta(action.id);
                dispatch(fetchThorUXMetaSuccess(response.body));
            } catch (error) {
                dispatch(fetchThorUXMetaFailure(error.message));
            }
            break;

        case UPDATE_THORUXMETA_REQUEST:
            try {
                const { id, ThorUXMeta } = action.payload;
                const response = updateThorUXMeta(id);
                dispatch(updateThorUXMetaSuccess(response.body));
            } catch (error) {
                dispatch(updateThorUXMetaFailure(error.message));
            }
            break;

        case DELETE_THORUXMETA_REQUEST:
            try {
                const { id, ThorUXMeta } = action.payload;
                const response = deleteThorUXMeta(id);
                dispatch(deleteThorUXMetaSuccess(response.body));
            } catch (error) {
                dispatch(deleteThorUXMetaFailure(error.message));
            }
            break;

        default:
            break;
    }
};

