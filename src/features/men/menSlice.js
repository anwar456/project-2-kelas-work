import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data
export const getMen = createAsyncThunk("list-product/men", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/men's clothing"
  );
  return response.data;
});

export const menSlice = createSlice({
  name: "men's clothing",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: [],
  extraReducers(builder) {
    builder.addCase(getMen.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getMen.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
  },
});

export default menSlice.reducer;
