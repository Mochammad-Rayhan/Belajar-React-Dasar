import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
console.log("oncreate store", store.getState());

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 5 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 10 }));
