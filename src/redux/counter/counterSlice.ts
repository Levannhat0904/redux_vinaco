import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
export interface CounterState {
        value: number
        status: 'idle' | 'loading' | 'failed'
}

// Define the initial value for the slice state
const initialState: CounterState = {
        value: 0,
        status: 'idle'
}
export const counterSlice = createSlice({
        name: 'counter',
        initialState,
        reducers: {
                increment: state => {
                        state.value += 1
                },
                decrement: state => {
                        state.value -= 1
                },
                incrementByAmount: (state, action: PayloadAction<number>) => {
                        state.value += action.payload
                }
        }
})

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectCount = (state: RootState) => state.counter.value
export const selectStatus = (state: RootState) => state.counter.status
// Export the slice reducer for use in the store configuration
export default counterSlice.reducer