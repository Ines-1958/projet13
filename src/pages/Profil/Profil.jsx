import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, updateUser, getUser } from '../../redux/slices/authSlice'
import { logOut } from '../../redux/slices/authSlice'
// import { useForm } from 'react-hook-form'

export default function Profil() {
  const { firstName, lastName, token } = useSelector((state) => state.auth)

  console.log(firstName)

  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const dispatch = useDispatch()

  useEffect(() => {
    setName({ firstName: firstName, lastName: lastName })
  }, [firstName, lastName])

  console.log(token)
  console.log(firstName)

  return (
    <div>
      <Navbar />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {/* Tony Jarvis! */}
            {`${name.firstName} ${name.lastName}`}
          </h1>
          <button
            className="edit-button"
            // onClick={dispatchUser}
          >
            Edit Name
          </button>
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
