import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice';
import todoReducer from './todolist/todoSlice';

export const store = configureStore({
        reducer: {
                counter: counterReducer,
                todo: todoReducer,  // Đây là reducer của bạn
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})

// Infer the type of `store`
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>; // Lấy kiểu của toàn bộ state
export type AppDispatch = AppStore['dispatch'];
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<
        ThunkReturnType,
        RootState,
        unknown,
        Action
>