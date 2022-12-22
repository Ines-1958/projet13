// const initialState = {
//   // token: localStorage.getItem('token'),
//   firstName: '',
//   lastName: '',
//   email: '',
//   registerStatus: '',
//   registerError: '',
//   userLoaded: false,
// }

// function authentReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'authent':
//       const newUser = { ...state.login }
//       newUser.unshift(action.payload)
//       return {
//         login: newUser,
//       }
//     case 'load': {
//       return {
//         // ...state,
//         load: action.payload,
//       }
//     }
//   }
//   return state
// }
// export default authentReducer

// export const getUser = () => (dispatch) => {
//   fetch('http://localhost:3001/api/v1/user/signup')
//     .then((response) => response.json())
//     .then((data) => {
//       dispatch({
//         type: 'authent',
//         payload: data,
//       })
//     })
// }
