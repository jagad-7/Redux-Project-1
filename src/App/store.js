import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Components/counter/counterSlice'
import calculatorReducer from './calculator/calculatorSlice'


const store = configureStore({
    reducer: {
        counter: counterReducer,   
        calculator: calculatorReducer,     
    }
})
export default store

