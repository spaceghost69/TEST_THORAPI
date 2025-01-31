import { createSlice } from "@reduxjs/toolkit";

import { OasComponents } from '../../model/OasComponents';

const OasComponentsSlice = createSlice({
  name: "OasComponentss",
  initialState: [],

  reducers: {
    OasComponentsAdded(state, action) {
      state.push(action.payload);
    },

    OasComponentsValueToggled(state, action) {
      console.log("OasComponents TOGGLE")
      console.warn(JSON.stringify(action))
      const OasComponents:OasComponents = state.find((OasComponents) => OasComponents.id === action.payload.OasComponentsId);
      if (OasComponents) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    OasComponentspropertySet(state, action) {
      const OasComponents = state.find((OasComponents) => OasComponents.id === action.payload.OasComponentsId);
      if (OasComponents) {
      //  OasComponents[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  OasComponentsAdded,
  OasComponentsValueToggled,
  OasComponentspropertySet
} = OasComponentsSlice.actions;
export default OasComponentsSlice.reducer;
