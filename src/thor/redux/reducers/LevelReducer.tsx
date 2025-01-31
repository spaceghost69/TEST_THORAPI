import { createSlice } from "@reduxjs/toolkit";

import { Level } from '../../model/Level';

const LevelSlice = createSlice({
  name: "Levels",
  initialState: [],

  reducers: {
    LevelAdded(state, action) {
      state.push(action.payload);
    },

    LevelValueToggled(state, action) {
      console.log("Level TOGGLE")
      console.warn(JSON.stringify(action))
      const Level:Level = state.find((Level) => Level.id === action.payload.LevelId);
      if (Level) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    LevelpropertySet(state, action) {
      const Level = state.find((Level) => Level.id === action.payload.LevelId);
      if (Level) {
      //  Level[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  LevelAdded,
  LevelValueToggled,
  LevelpropertySet
} = LevelSlice.actions;
export default LevelSlice.reducer;
