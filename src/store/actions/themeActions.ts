import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

export const switchThemeAction: CaseReducer<
  ThemeState,
  PayloadAction<boolean>
> = (state, actions) => {
  const {payload: newThemeMode} = actions;

  state.isDark = newThemeMode;
};
