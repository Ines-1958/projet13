import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url, setHeaders } from './api'

const initialState = {
  token: localStorage.getItem('token'),
  firstName: '',
  lastName: '',
  email: '',
  registerStatus: '',
  registerError: '',
  userLoaded: false,
}

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    // try {
    //   const token = await fetch.post(`${url}/authent`, {
    //     email: userData.email,
    //     password: userData.password,
    //   });
    //   return token;
    // } catch (err) {
    //   return rejectWithValue([], err);
    // }

    const response = await fetch.post(`${url}/login`, {
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
      const error = {
        message: json.message,
      }
      console.log(error)
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

    const userInfo = json.body

    localStorage.setItem('firstName', userInfo.firstName)
    localStorage.setItem('lastName', userInfo.lastName)
    return userInfo
  } catch (error) {
    console.log(error)
  }
}

export const getUser = createAsyncThunk(
  'auth/getUser',
  async (userData, { getState }) => {
    const { authent } = getState()
    const token = authent.token

    try {
      const response = await fetch.post(`${url}/profile`, {
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
      console.log(error.response)
      // return rejectWithValue(error.response.data)
    }
  }
)

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (userData, { getState }) => {
    const { auth } = getState()
    try {
      const response = await fetch.put(`${url}/profile`, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      })
      const json = await response.json()
      return json
    } catch (error) {
      console.log(error)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOut: (state) => {
      let keysToRemove = ['token', 'firstName', 'lastName']
      keysToRemove.forEach((key) => localStorage.removeItem(key))
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

export const { signOut } = authSlice.actions
export default authSlice.reducer
