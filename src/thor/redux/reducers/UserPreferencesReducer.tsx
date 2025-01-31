import { createSlice } from "@reduxjs/toolkit";

import { UserPreferences } from '../../model/UserPreferences';

const UserPreferencesSlice = createSlice({
  name: "UserPreferencess",
  initialState: [],

  reducers: {
    UserPreferencesAdded(state, action) {
      state.push(action.payload);
    },

    UserPreferencesValueToggled(state, action) {
      console.log("UserPreferences TOGGLE")
      console.warn(JSON.stringify(action))
      const UserPreferences:UserPreferences = state.find((UserPreferences) => UserPreferences.id === action.payload.UserPreferencesId);
      if (UserPreferences) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    UserPreferencespropertySet(state, action) {
      const UserPreferences = state.find((UserPreferences) => UserPreferences.id === action.payload.UserPreferencesId);
      if (UserPreferences) {
      //  UserPreferences[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  UserPreferencesAdded,
  UserPreferencesValueToggled,
  UserPreferencespropertySet
} = UserPreferencesSlice.actions;
export default UserPreferencesSlice.reducer;
