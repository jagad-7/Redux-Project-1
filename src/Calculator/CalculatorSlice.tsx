import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorState{
    display: string,
    previousValue: number | null,
    currentValue: number | null,
    operator: string | null
}

const initialState: CalculatorState = {
    display: '0',
    previousValue: null,
    currentValue: null,
    operator: null
} 

const CalculatorState = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        inputDigit(state, action: PayloadAction<string>){
            if(state.display === '0'){
                state.display = action.payload
            }else{
                state.display += action.payload
            }
        },
        inputOperator(state, action: PayloadAction<string>){
            state.previousValue = parseFloat(state.display)
            state.display = action.payload
            state.operator = action.payload
        },
        calculate(state){
            if(state.previousValue !== null && state.operator !== null){
                let currentValue = parseFloat(state.display);
                let result: number | null = null;
                switch(state.operator){
                    case '+':
                         result = state.previousValue + currentValue
                        break
                        case '-':
                            result = state.previousValue - currentValue;
                            break;
                          case '*':
                            result = state.previousValue * currentValue;
                            break;
                          case '/':
                            result = state.previousValue / currentValue;
                            break;
                }
                if (result !== null) {
                    state.display = result.toString();
                    state.previousValue = result;
                    state.currentValue = null;
                    state.operator = null;
                  }
            }
        },
        clear(state) {
            state.display = '0';
            state.previousValue = null;
            state.currentValue = null;
            state.operator = null;
          },
    }
})


export const { inputDigit, inputOperator, calculate, clear } = CalculatorState.actions;
export default CalculatorState.reducer