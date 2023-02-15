import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data
export const getElectronic = createAsyncThunk(
  "list-product/electronic",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    return response.data;
  }
);

export const electronicSlice = createSlice({
  name: "electronics",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: [],
  extraReducers(builder) {
    builder.addCase(getElectronic.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getElectronic.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
  },
});

export default electronicSlice.reducer;
