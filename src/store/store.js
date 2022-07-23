import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import users from "./users";

const reducer = combineReducers({
  users
})

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;