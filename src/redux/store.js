import { applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
//import authentReducer from './reducers/authentReducer'
// import authReducer from './slices/authSlice'
import authReducer from '../redux/slices/authSlice'
//import userProfileSlice from './slices/userSlice'
// import userSlice from './slices/userSlice'

// const rootReducer = combineReducers({
//   authentReducer,
// })

// const store = createStore(rootReducer, applyMiddleware(thunk))

const store = configureStore({
  reducer: {
    auth: authReducer,
    //user: userProfileSlice,
    // user: userSlice,
  },
  // middleware: [applyMiddleware(thunk)],
})

// const store = configureStore({
//   reducer: {
//     // products: productsReducer,
//     // cart: cartReducer,
//     auth: authReducer,
//     // [productsApi.reducerPath]: productsApi.reducer,
//   },
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware().concat(productsApi.middleware),
// })

// store.dispatch(productsFetch());
// store.dispatch(getTotals());

export default store
