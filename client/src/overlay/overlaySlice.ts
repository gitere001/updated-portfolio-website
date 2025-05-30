import { createSlice } from '@reduxjs/toolkit';

type OverlayState = {
  isVisible: boolean;
};

const initialState: OverlayState = {
  isVisible: false,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    showOverlay: (state) => {
      state.isVisible = true;
    },
    hideOverlay: (state) => {
      state.isVisible = false;
    },
    toggleOverlay: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showOverlay, hideOverlay, toggleOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
