import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, updateUser } from '../../redux/slices/authSlice'

export default function Profil() {
  const { firstName, lastName, token } = useSelector((state) => state.auth)

  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const dispatch = useDispatch()

  return (
    <div>
      {/* <Navbar /> */}
      <nav className="main-nav">
        {/* <a class="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a> */}
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        <div>
          {/* <a class="main-nav-item" href="./user.html">
            <i class="fa fa-user-circle"></i>
            Tony
          </a>
          <a class="main-nav-item" href="./index.html">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </a> */}
          <NavLink className="main-nav-item" to="/profil">
            <i className="fa fa-user-circle"></i>
            Tony
          </NavLink>
          <NavLink className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {/* Tony Jarvis! */}
            {name}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
