import {  createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  time: number;
    faith: number;
    doubt: number;
    hunger: number;
    lastClickTime: number | null;
    dialogue: number;
}

const initialState: GameState = {
  time: 0,
  faith: 0,
  doubt: 0,
  hunger: 0,
  lastClickTime: Date.now(),
  dialogue: 0,
};


export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    //Write a reducer that will reset state to initial state
    reset: () => initialState,

    incrementTime: (state) => {
      state.time += 1;
    },
    //Write a reducer which increments faith by payload
    incrementFaith: (state, action: PayloadAction<number>) => {
      state.faith += action.payload;
    },
    //Write a reducer which increments doubt by payload
    incrementDoubt: (state, action: PayloadAction<number>) => {
      state.doubt += action.payload;
    },
    //Write a reducer which increments hunger by payload
    incrementHunger: (state, action: PayloadAction<number>) => {
      state.hunger += action.payload;
    },
    updateLastClickTime: (state, action: PayloadAction<number|null>) => {
        state.lastClickTime = action.payload;
        console.log(state.lastClickTime);
      },
  },
});

export const { incrementTime, incrementDoubt, incrementFaith, incrementHunger, updateLastClickTime, reset } = gameSlice.actions;
export default gameSlice.reducer;


export const saveGameState = (state: GameState) => {
    localStorage.setItem('gameState', JSON.stringify(state));
  };
  
  export const loadGameState = (): GameState => {
    const savedState = localStorage.getItem('gameState');
    return savedState ? JSON.parse(savedState) : initialState;
  };
  
