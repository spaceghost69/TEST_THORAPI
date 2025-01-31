// defines the Redux Actions for BackupConfig

// BackupConfig

export const FETCH_BACKUPCONFIG_REQUEST = 'FETCH_BACKUPCONFIG_REQUEST';
export const FETCH_BACKUPCONFIG_SUCCESS = 'FETCH_BACKUPCONFIG_SUCCESS';
export const FETCH_BACKUPCONFIG_FAILURE = 'FETCH_BACKUPCONFIG_FAILURE';

export const ADD_BACKUPCONFIG_REQUEST = 'ADD_BACKUPCONFIG_REQUEST';
export const ADD_BACKUPCONFIG_SUCCESS = 'ADD_BACKUPCONFIG_SUCCESS';
export const ADD_BACKUPCONFIG_FAILURE = 'ADD_BACKUPCONFIG_FAILURE';

export const UPDATE_BACKUPCONFIG_REQUEST = 'UPDATE_BACKUPCONFIG_REQUEST';
export const UPDATE_BACKUPCONFIG_SUCCESS = 'UPDATE_BACKUPCONFIG_SUCCESS';
export const UPDATE_BACKUPCONFIG_FAILURE = 'UPDATE_BACKUPCONFIG_FAILURE';

export const DELETE_BACKUPCONFIG_REQUEST = 'DELETE_BACKUPCONFIG_REQUEST';
export const DELETE_BACKUPCONFIG_SUCCESS = 'DELETE_BACKUPCONFIG_SUCCESS';
export const DELETE_BACKUPCONFIG_FAILURE = 'DELETE_BACKUPCONFIG_FAILURE';

export const LIST_BACKUPCONFIG_REQUEST = 'LIST_BACKUPCONFIG_REQUEST';
export const LIST_BACKUPCONFIG_SUCCESS = 'LIST_BACKUPCONFIG_SUCCESS';
export const LIST_BACKUPCONFIG_FAILURE = 'LIST_BACKUPCONFIG_FAILURE';

export const addBackupConfigRequest = () => ({
    type: ADD_BACKUPCONFIG_REQUEST,
});

export const addBackupConfigSuccess = (BackupConfigs) => ({
    type: ADD_BACKUPCONFIG_SUCCESS,
    payload: BackupConfigs,
});

export const addBackupConfigFailure = (error) => ({
    type: ADD_BACKUPCONFIG_FAILURE,
    payload: error,
});


export const fetchBackupConfigRequest = () => ({
    type: FETCH_BACKUPCONFIG_REQUEST,
});

export const fetchBackupConfigSuccess = (BackupConfigs) => ({
    type: FETCH_BACKUPCONFIG_SUCCESS,
    payload: BackupConfigs,
});

export const fetchBackupConfigFailure = (error) => ({
    type: FETCH_BACKUPCONFIG_FAILURE,
    payload: error,
});

export const listBackupConfigRequest = () => ({
    type: LIST_BACKUPCONFIG_REQUEST,
});

export const listBackupConfigSuccess = (BackupConfigs) => ({
    type: LIST_BACKUPCONFIG_SUCCESS,
    payload: BackupConfigs,
});

export const listBackupConfigFailure = (error) => ({
    type: LIST_BACKUPCONFIG_FAILURE,
    payload: error,
});

export const updateBackupConfigRequest = (BackupConfig) => ({
    type: UPDATE_BACKUPCONFIG_REQUEST,
    payload: BackupConfig,
});

export const updateBackupConfigSuccess = (BackupConfig) => ({
    type: UPDATE_BACKUPCONFIG_SUCCESS,
    payload: BackupConfig,
});

export const updateBackupConfigFailure = (error) => ({
    type: UPDATE_BACKUPCONFIG_FAILURE,
    payload: error,
});

export const deleteBackupConfigRequest = (BackupConfig) => ({
    type: DELETE_BACKUPCONFIG_REQUEST,
    payload: BackupConfig,
});

export const deleteBackupConfigSuccess = (BackupConfig) => ({
    type: DELETE_BACKUPCONFIG_SUCCESS,
    payload: BackupConfig,
});

export const deleteBackupConfigFailure = (error) => ({
    type: DELETE_BACKUPCONFIG_FAILURE,
    payload: error,
});
