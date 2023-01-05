import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import AccountContent from '../components/AccountContent'
import { useForm } from 'react-hook-form'

import { updateUser, getUser } from '../../redux/slices/authSlice'
import Navbar from '../../components/Navbar/Navbar'
import '../Profil/Profil.css'

export default function Profil() {
  const { firstName, lastName } = useSelector((state) => state.auth)
  const [editProfile, setEditProfile] = useState(false)
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  })

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const editData = () => {
    setEditProfile(true)
  }

  const dispatchUser = (data) => {
    dispatch(updateUser(data)).then(() => {
      setEditProfile(false)
      dispatch(getUser())
    })
  }

  useEffect(() => {
    document.title = 'ArgentBank - Profile'
    setName({ firstName: firstName, lastName: lastName })
  }, [firstName, lastName])

  const handleInputs = (e) => {
    console.log('tototootot')
    if (e.target.classList.contains('inp-firstName')) {
      const newObjState = { ...name, firstName: e.target.value }
      setName(newObjState)
    } else if (e.target.classList.contains('inp-lastName')) {
      const newObjState = { ...name, lastName: e.target.value }
      setName(newObjState)
    }
  }

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          {editProfile ? (
            <>
              <h1>Welcome back</h1>
              <form
                onSubmit={handleSubmit(dispatchUser)}
                className="profile-update"
              >
                <div className="edit-name">
                  <input
                    type="text"
                    id="firstname"
                    className="inp-firstName"
                    placeholder={name.firstName}
                    {...register('firstname')}
                  />
                  <button className="edit-profile_button" type="submit">
                    Save
                  </button>
                </div>
                <div className="edit-name">
                  <input
                    type="text"
                    id="lastname"
                    className=" inp-lastName"
                    placeholder={name.lastName}
                    {...register('lastname')}
                  />
                  <button
                    className="edit-profile_button"
                    onClick={() => setEditProfile(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {`${name.firstName} ${name.lastName}`}
              </h1>
              <button className="edit-button" onClick={editData}>
                Edit Name
              </button>
            </>
          )}
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
    </>
  )
}
