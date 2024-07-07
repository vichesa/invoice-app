import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "./features/invoice-slice";

export const store = configureStore({
  reducer: {
    invoiceReducer,
  },
});
