import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  invoice: [],
};

export const todo = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      const data = {
        id: nanoid(),
        date: action.payload,
        customerName: action.payload,
        salesName: action.payload,
        note: action.payload,
        productsSold: action.payload,
      };

      state.invoice.push(data);
    },
  },
});

export const { addInvoice } = invoice.actions;
export default invoice.reducer;
