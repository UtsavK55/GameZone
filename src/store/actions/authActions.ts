import {STORAGE_KEYS} from '@constants';
import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {removeItem, setItem} from '@storage';

export const setTokenAction: CaseReducer<AuthState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.token = action.payload;
  setItem(STORAGE_KEYS.AUTH_TOKEN, action.payload);
};
export const clearTokenAction: CaseReducer<AuthState> = state => {
  state.token = '';
  removeItem(STORAGE_KEYS.AUTH_TOKEN);
};
