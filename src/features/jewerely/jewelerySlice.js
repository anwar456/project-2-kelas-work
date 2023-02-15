import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get data
export const getJewelery = createAsyncThunk(
  "list-product/jewelery",
  async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    return response.data;
  }
);

export const jewelerySlice = createSlice({
  name: "jewelery",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: [],
  extraReducers(builder) {
    builder.addCase(getJewelery.pending, (state, action) => {
      state.status = "loading";
    });

    builder.addCase(getJewelery.fulfilled, (state, action) => {
      state.status = "succes";
      state.data = action.payload;
    });
  },
});

export default jewelerySlice.reducer;
