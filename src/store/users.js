import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const slice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    err: null,
    singleUser: null,
  },
  reducers: {
    loadingStart: (state, action) => {
      state.loading = true;
      state.err = null;
      state.singleUser = null;
    },
    addUser: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.err = null;
    },
    getsingleUser: (state, action) => {
      state.singleUser = action.payload;
      state.loading = false;
      state.err = null;
    }
  }
})

export default slice.reducer;

//Actions 
const { addUser, loadingStart, getsingleUser } = slice.actions;

export const addUserAction = () => async dispatch => {
  try {
    dispatch(loadingStart());
    const { data } = await axios.get("https://reqres.in/api/users");

    return dispatch(addUser(data.data));
  }
  catch (err) {
    console.log(err)
  }
}

export const getSingleUserAction = (id) => async dispatch => {
  try {
    dispatch(loadingStart());
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

    return dispatch(getsingleUser(data.data));
  }
  catch (err) {
    console.log(err)
  }
}


