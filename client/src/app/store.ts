import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from "../overlay/overlaySlice";

const store = configureStore({
  reducer: {
    overlay: overlayReducer,
  },
});


// ⬇️ ADD THIS BELOW
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
