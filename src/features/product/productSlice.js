import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data
export const getProduct = createAsyncThunk("list-product/product", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: [],
  extraReducers(builder) {
    builder.addCase(getProduct.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
  },
});

export default productSlice.reducer;
