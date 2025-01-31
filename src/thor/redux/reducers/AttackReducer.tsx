import { createSlice } from "@reduxjs/toolkit";

import { Attack } from '../../model/Attack';

const AttackSlice = createSlice({
  name: "Attacks",
  initialState: [],

  reducers: {
    AttackAdded(state, action) {
      state.push(action.payload);
    },

    AttackValueToggled(state, action) {
      console.log("Attack TOGGLE")
      console.warn(JSON.stringify(action))
      const Attack:Attack = state.find((Attack) => Attack.id === action.payload.AttackId);
      if (Attack) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    AttackpropertySet(state, action) {
      const Attack = state.find((Attack) => Attack.id === action.payload.AttackId);
      if (Attack) {
      //  Attack[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  AttackAdded,
  AttackValueToggled,
  AttackpropertySet
} = AttackSlice.actions;
export default AttackSlice.reducer;
