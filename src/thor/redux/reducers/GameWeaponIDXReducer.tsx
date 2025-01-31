import { createSlice } from "@reduxjs/toolkit";

import { GameWeaponIDX } from '../../model/GameWeaponIDX';

const GameWeaponIDXSlice = createSlice({
  name: "GameWeaponIDXs",
  initialState: [],

  reducers: {
    GameWeaponIDXAdded(state, action) {
      state.push(action.payload);
    },

    GameWeaponIDXValueToggled(state, action) {
      console.log("GameWeaponIDX TOGGLE")
      console.warn(JSON.stringify(action))
      const GameWeaponIDX:GameWeaponIDX = state.find((GameWeaponIDX) => GameWeaponIDX.id === action.payload.GameWeaponIDXId);
      if (GameWeaponIDX) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    GameWeaponIDXpropertySet(state, action) {
      const GameWeaponIDX = state.find((GameWeaponIDX) => GameWeaponIDX.id === action.payload.GameWeaponIDXId);
      if (GameWeaponIDX) {
      //  GameWeaponIDX[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  GameWeaponIDXAdded,
  GameWeaponIDXValueToggled,
  GameWeaponIDXpropertySet
} = GameWeaponIDXSlice.actions;
export default GameWeaponIDXSlice.reducer;
