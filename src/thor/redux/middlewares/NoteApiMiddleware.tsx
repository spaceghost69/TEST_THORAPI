
import { 
    getNote, 
    postNote,
    getNoteList , 
    deleteNote , 
    updateNote 
} from '../../api';

import {

    ADD_NOTE_REQUEST,
    FETCH_NOTE_REQUEST,
    LIST_NOTE_REQUEST,
    UPDATE_NOTE_REQUEST,
    DELETE_NOTE_REQUEST,

    addNoteFailure,
    addNoteSuccess,

    fetchNoteFailure,
    fetchNoteSuccess,
    
    listNoteFailure,
    listNoteSuccess,

    updateNoteFailure,
    updateNoteSuccess,
    
    deleteNoteFailure,
    deleteNoteSuccess,
    
} from '../actions/NoteApiAction';

/**
############################## DO NOT EDIT: GENERATED FILE ##############################

Generated by CARMINA GAMES ThorAPI: https://valkyrlabs.com

Powered by Swagger Codegen: http://swagger.io

Generator version: (7.5.0)

Template file: typescript-redux-query/apiREST.mustache

############################## DO NOT EDIT: GENERATED FILE ##############################

Description: Note
*/

export const NoteMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("Note MIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {

        case ADD_NOTE_REQUEST:
            try {
                const response = postNote(action.payload);
                dispatch(addNoteSuccess(response.body));
            } catch (error) {
                dispatch(addNoteFailure(error.message));
            }
            break;

        case LIST_NOTE_REQUEST:
            try {
                const response = getNoteList();
                dispatch(listNoteSuccess(response.body));
            } catch (error) {
                dispatch(listNoteFailure(error.message));
            }
            break;


        case FETCH_NOTE_REQUEST:
            try {
                const response = getNote(action.id);
                dispatch(fetchNoteSuccess(response.body));
            } catch (error) {
                dispatch(fetchNoteFailure(error.message));
            }
            break;

        case UPDATE_NOTE_REQUEST:
            try {
                const { id, Note } = action.payload;
                const response = updateNote(id);
                dispatch(updateNoteSuccess(response.body));
            } catch (error) {
                dispatch(updateNoteFailure(error.message));
            }
            break;

        case DELETE_NOTE_REQUEST:
            try {
                const { id, Note } = action.payload;
                const response = deleteNote(id);
                dispatch(deleteNoteSuccess(response.body));
            } catch (error) {
                dispatch(deleteNoteFailure(error.message));
            }
            break;

        default:
            break;
    }
};

