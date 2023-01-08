import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from './api'

const initialState = {
  token: localStorage.getItem('token'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName'),
  email: '',
  password: '',
  loginError: null,
}

export const loginUser = createAsyncThunk(
  /**le nom du reducer , suivi de l'action(type de l'action) */
  'auth/loginUser',

  /**userData est l'argument passé au rappel pour l'adresse mail et le mot de passe  */
  async (userData, { rejectWithValue }) => {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })

    const json = await response.json()

    if (json.status === 200) {
      const token = json.body.token
      localStorage.setItem('token', token)
      const userInfos = await getUserInfos(token)

      const dataUserPayload = {
        token: token,
        firstName: userInfos.firstName,
        lastName: userInfos.lastName,
      }
      localStorage.setItem('firstName', userInfos.firstName)
      localStorage.setItem('lastName', userInfos.lastName)

      return dataUserPayload
    } else {
      const error = { message: json.message }

      return rejectWithValue(error)
    }
  }
)

async function getUserInfos(token) {
  try {
    const response = await fetch(`${url}/profile`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const json = await response.json()

    const userInfos = json.body

    localStorage.setItem('firstName', userInfos.firstName)
    localStorage.setItem('lastName', userInfos.lastName)
    return userInfos
  } catch (error) {
    console.log(error)
  }
}

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  /**userData représente le firstName et le lastName */
  async (userData, { getState }) => {
    const { auth } = getState()
    try {
      const response = await fetch(`${url}/profile`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },

        body: JSON.stringify({
          firstName: userData.firstname,
          lastName: userData.lastname,
        }),
      })
      const json = await response.json()
      return json
    } catch (error) {
      console.log(error)
    }
  }
)

export const getUser = createAsyncThunk(
  'user/getUser',
  async (_, { getState }) => {
    const { auth } = getState()
    const token = auth.token
    try {
      const response = await fetch(`${url}/profile`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })

      const json = await response.json()
      const userInfos = json.body

      localStorage.setItem('firstName', userInfos.firstName)
      localStorage.setItem('lastName', userInfos.lastName)

      return userInfos
    } catch (error) {
      console.log(error)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**Gestion de la deconnexion de l'utilisateur */
    logOut: (state) => {
      let itemsToBeRemoved = ['token', 'firstName', 'lastName']
      itemsToBeRemoved.forEach((item) => localStorage.removeItem(item))
      state.firstName = null
      state.lastName = null
      state.token = null
      state.loginError = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loginError = null
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.token = action.payload.token
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginError = action.payload.message
    })

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    })
  },
})

export const { logOut } = authSlice.actions
export default authSlice.reducer
