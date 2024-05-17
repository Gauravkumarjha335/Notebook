import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './Slices/Counterslice'

export const store = configureStore({
    reducer: {
         counter : CounterReducer,
    },
})