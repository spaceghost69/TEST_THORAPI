
import { 
    getFormat, 
    postFormat,
    getFormatList , 
    deleteFormat , 
    updateFormat 
} from '../../api';

import {

    ADD_FORMAT_REQUEST,
    FETCH_FORMAT_REQUEST,
    LIST_FORMAT_REQUEST,
    UPDATE_FORMAT_REQUEST,
    DELETE_FORMAT_REQUEST,

    addFormatFailure,
    addFormatSuccess,

    fetchFormatFailure,
    fetchFormatSuccess,
    
    listFormatFailure,
    listFormatSuccess,

    updateFormatFailure,
    updateFormatSuccess,
    
    deleteFormatFailure,
    deleteFormatSuccess,
    
} from '../actions/FormatApiAction';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apiREST.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: Format
*/

export const FormatMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("Format MIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {

        case ADD_FORMAT_REQUEST:
            try {
                const response = postFormat(action.payload);
                dispatch(addFormatSuccess(response.body));
            } catch (error) {
                dispatch(addFormatFailure(error.message));
            }
            break;

        case LIST_FORMAT_REQUEST:
            try {
                const response = getFormatList();
                dispatch(listFormatSuccess(response.body));
            } catch (error) {
                dispatch(listFormatFailure(error.message));
            }
            break;


        case FETCH_FORMAT_REQUEST:
            try {
                const response = getFormat(action.id);
                dispatch(fetchFormatSuccess(response.body));
            } catch (error) {
                dispatch(fetchFormatFailure(error.message));
            }
            break;

        case UPDATE_FORMAT_REQUEST:
            try {
                const { id, Format } = action.payload;
                const response = updateFormat(id);
                dispatch(updateFormatSuccess(response.body));
            } catch (error) {
                dispatch(updateFormatFailure(error.message));
            }
            break;

        case DELETE_FORMAT_REQUEST:
            try {
                const { id, Format } = action.payload;
                const response = deleteFormat(id);
                dispatch(deleteFormatSuccess(response.body));
            } catch (error) {
                dispatch(deleteFormatFailure(error.message));
            }
            break;

        default:
            break;
    }
};

