import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui', 
  initialState: { open: false }, 
  reducers: {
    toggleOpen(state) { 
      state.open = !state.open
    }
  }
})


export default uiSlice.reducer; 
export const uiActions = uiSlice.actions;