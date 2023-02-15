import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data
export const getWomen = createAsyncThunk("list-product/women", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  return response.data;
});

export const womenSlice = createSlice({
  name: "women",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: [],
  extraReducers(builder) {
    builder.addCase(getWomen.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getWomen.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
  },
});

export default womenSlice.reducer;
