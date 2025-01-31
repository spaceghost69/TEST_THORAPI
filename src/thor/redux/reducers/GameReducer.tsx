import { createSlice } from "@reduxjs/toolkit";

import { Game } from '../../model/Game';

const GameSlice = createSlice({
  name: "Games",
  initialState: [],

  reducers: {
    GameAdded(state, action) {
      state.push(action.payload);
    },

    GameValueToggled(state, action) {
      console.log("Game TOGGLE")
      console.warn(JSON.stringify(action))
      const Game:Game = state.find((Game) => Game.id === action.payload.GameId);
      if (Game) {
        if (action.payload.target === "SOMETHING") {
          
        }
      }
    },
    
    GamepropertySet(state, action) {
      const Game = state.find((Game) => Game.id === action.payload.GameId);
      if (Game) {
      //  Game[action.property] = action.payload[action.property];
      }
    },
  },
});

export const {
  GameAdded,
  GameValueToggled,
  GamepropertySet
} = GameSlice.actions;
export default GameSlice.reducer;
