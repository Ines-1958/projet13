import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const handleForm = (e) => {
    e.preventDefault()

    dispatch({
      type: 'authent',
      payload: login,
    })

    setLogin({
      email: '',
      password: '',
    })
  }

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
            <NavLink className="sign-in-button" to={`/profil`}>
              Sign In
            </NavLink>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
            {/* <!--  --> */}
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
