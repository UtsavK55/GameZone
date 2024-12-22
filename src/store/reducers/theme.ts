import {createSlice} from '@reduxjs/toolkit';

import {STORE_CONSTANTS} from '@constants';
import {switchThemeAction} from '@store/actions/themeActions';

const {NAME: sliceName} = STORE_CONSTANTS.THEME;

const initialState: ThemeState = {
  isDark: false,
};

const themeSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {switchTheme: switchThemeAction},
});

const themeReducer = themeSlice.reducer;

export const {switchTheme} = themeSlice.actions;

export default themeReducer;
