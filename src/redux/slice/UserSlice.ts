import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: any | null;  
  items: any[];   
}

const initialState: UserState = {
  user: null,
  items: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setItem(state, action) {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload; 
      } else {
        state.items.push(action.payload); 
      }
    },
  },
});

export const { setUser, setItem } = userSlice.actions;

export default userSlice.reducer;
