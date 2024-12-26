import {createSlice} from '@reduxjs/toolkit';

import {STORAGE_KEYS, STORE_CONSTANTS} from '@constants';
import {getItem} from '@storage';
import {clearTokenAction, setTokenAction} from '@store/actions/authActions';

const {NAME: sliceName} = STORE_CONSTANTS.AUTH;

const initialState: AuthState = {
  token: getItem(STORAGE_KEYS.AUTH_TOKEN) || '',
};

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setToken: setTokenAction,
    clearToken: clearTokenAction,
  },
});

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;
