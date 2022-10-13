import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'result',
    initialState: {
        value: 0,
        operation: ['3', '+', '70']

    },
    reducers: {

        screen: (state, action) => {
            state.value = action.payload;
            state.operation = [...state.operation, action.payload]
        },

        addition: (state, action) => {
            
        },

        soustraction: (state, action) => {

        },

        division: (state, action) => {

        },

        multiplication: (state, action) => {

        },

        clear: (state) => {
            state.value = 0;
            state.operation = [];
        }
    }
})

export const {screen, clear} = calculatorSlice.actions

export default calculatorSlice.reducer