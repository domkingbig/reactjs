import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storage-keys';

export const register = createAsyncThunk('users/register', async (payload) => {
  //call APi to register
  const data = await userApi.register(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return user data
  return data.user;
});

export const login = createAsyncThunk('users/login', async (payload) => {
  //call APi to register
  const data = await userApi.login(payload);
  //save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.jwt);
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  // return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    setting: {},
  },
  reducers: {
    logout(state) {
      // clear stotage
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
      state.current = {};
    },
  },
  extraReducers: {
    //nhung loai reducer do minh tu define,
    //[register.fulfilled] === 'user/register/fullfiled'
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;

export default reducer; //default export
