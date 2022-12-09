import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import scriptReducer from './slices/scriptSlice';
export const store = configureStore({
	reducer: {
		user: userReducer,
		script: scriptReducer,
	}, 
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: false
		}),
	],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;