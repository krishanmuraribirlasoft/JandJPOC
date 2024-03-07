import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";

const appStore = () => {
  return configureStore({
    reducer: {
      search: searchReducer,
    },
  });
};
export default appStore;
// Infer the type of makeStore
export type AppStore = ReturnType<typeof appStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
