import { createSlice } from "@reduxjs/toolkit";

import { Weapon } from '../../model/Weapon';

const WeaponSlice = createSlice({
  name: "Weapons",
  initialState: [],

  reducers: {
    WeaponAdded(state, action) {
      state.push(action.payload);
    },

    WeaponValueToggled(state, action) {
      console.log("Weapon TOGGLE")
      console.warn(JSON.stringify(action))
      const Weapon:Weapon = state.find((Weapon) => Weapon.id === action.payload.WeaponId);
      if (Weapon) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    WeaponpropertySet(state, action) {
      const Weapon = state.find((Weapon) => Weapon.id === action.payload.WeaponId);
      if (Weapon) {
      //  Weapon[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  WeaponAdded,
  WeaponValueToggled,
  WeaponpropertySet
} = WeaponSlice.actions;
export default WeaponSlice.reducer;
