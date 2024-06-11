import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './assets/slices/counterSlice'

export default configureStore({
  reducer: {
    counter : counterSlice
  },
})