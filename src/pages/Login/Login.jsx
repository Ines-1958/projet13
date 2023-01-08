import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { token, loginError } = useSelector((state) => state.auth)

  const handleForm = (e) => {
    e.preventDefault()

    dispatch(loginUser(login)) //Action: loginUser et payload login déclaré dans le state
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
    }
  }, [navigate, token])

  /**handleInputs est une fonction qui permet de lier le state aux inputs du formulaire */
  const handleInputs = (e) => {
    if (e.target.classList.contains('input-email')) {
      const newObjState = { ...login, email: e.target.value }
      console.log(newObjState)
      setLogin(newObjState)
    } else if (e.target.classList.contains('input-password')) {
      const newObjState = { ...login, password: e.target.value }
      setLogin(newObjState)
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FaUserCircle className="icon faUserCircle" />

          <h1>Sign In</h1>

          <form onSubmit={handleForm}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={login.email}
                onChange={handleInputs}
                className="input-email"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={login.password}
                onChange={handleInputs}
                className="input-password"
              />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
