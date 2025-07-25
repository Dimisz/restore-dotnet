import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import counterReducer, { counterSlice } from "../features/contacts/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../features/contacts/catalogApi";
import { uiSlice } from "../layout/uiSlice";

export function configureTheStore() {
  return legacy_createStore(counterReducer);
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer
  },
  // responsible for requests / caching
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogApi.middleware)
});


// TS setup
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();