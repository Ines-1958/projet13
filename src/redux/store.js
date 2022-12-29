import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
//import authentReducer from './reducers/authentReducer'
// import authReducer from './slices/authSlice'
import authReducer from '../redux/slices/authSlice'
//import userProfileSlice from './slices/userSlice'
// import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
})

export default store
