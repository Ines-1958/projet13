import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
// import { FaUserCircle } from 'react-icons/fa'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { NavLink } from 'react-router-dom'
// import loginUser from '../../redux/slices/authSlice.js'

//

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()
  console.log(dispatch)

  //
  const navigate = useNavigate()

  // const { register, handleSubmit } = useForm()
  const { token, loginError } = useSelector((state) => state.auth)

  console.log(token)

  const handleForm = (e) => {
    console.log('bonjour')
    e.preventDefault()

    console.log(login)

    dispatch(loginUser(login))

    // dispatch({
    //   type: 'loginUser',
    //   payload: login,
    // })

    // console.log(dispatch(loginUser(login)))
  }

  useEffect(() => {
    if (token) {
      navigate('/profile')
      console.log(token)
      console.log('correct token')
    } else {
      console.log('no token')
    }
  }, [navigate, token])

  const handleInputs = (e) => {
    console.log('tototootot')
    if (e.target.classList.contains('inp-email')) {
      const newObjState = { ...login, email: e.target.value }
      setLogin(newObjState)
    } else if (e.target.classList.contains('inp-password')) {
      const newObjState = { ...login, password: e.target.value }
      setLogin(newObjState)
    }
  }

  return (
    <>
      <Navbar />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>

          <h1>Sign In</h1>

          <form onSubmit={handleForm}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={login.email}
                onChange={handleInputs}
                className="inp-email"
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={login.password}
                onChange={handleInputs}
                className="inp-password"
              />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}

            {/* <a href="./user.html" className="sign-in-button">
              Sign In
            </a> */}

            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            <button
              // onClick={handleForm}
              type="submit"
              className="sign-in-button"
            >
              Sign In
            </button>
            {/* <!--  --> */}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
