import { configureStore } from '@reduxjs/toolkit'
import  calculatorSlice  from './slice'

export default configureStore({
  reducer: {
    result: calculatorSlice,
  },
})