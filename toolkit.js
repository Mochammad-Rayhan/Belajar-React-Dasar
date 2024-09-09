import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

//Buat Action
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

//Buat Reducer
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});
//Buat store untuk penampungan reducer
const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

//Menampilkan hasil
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});
console.log("oncreate store", store.getState());

//Masukkan action untuk di eksekusi
store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(addToCart({ id: 2, qty: 10 }));
store.dispatch(login());
