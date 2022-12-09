import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import labReducer from './slices/labSlice';
import scriptReducer from './slices/scriptSlice';
export const store = configureStore({
	reducer: {
		lab: labReducer,
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