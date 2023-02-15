import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReducer from "../features/product/productSlice";
import menReducer from "../features/men/menSlice";
import jeweleryreducer from "../features/jewerely/jewelerySlice";
import womenReducer from "../features/women/womenySlice";
import electronicReducer from "../features/electronic/electronicSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    men: menReducer,
    jewelery: jeweleryreducer,
    women: womenReducer,
    electronic: electronicReducer,
  },
});
