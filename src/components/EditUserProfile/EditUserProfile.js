import React, { useState } from 'react'
import { loginUser, updateUser, getUser } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function EditUserProfile() {
  const [editProfile, setEditProfile] = useState(false)
  const dispatch = useDispatch()

  const editData = () => {
    setEditProfile(true)
  }

  const submitForm = (data) => {
    dispatch(updateUser(data)).then(() => {
      setEditProfile(false)
      dispatch(getUser())
    })
  }

  return (
    <>
      <h1>Welcome back</h1>
      <form onSubmit={submitForm} className="update-name__form">
        <div className="update-name__col-left">
          <input
            type="text"
            id="firstname"
            className="update-name__input"
            //   placeholder={userName.firstName} {...register('firstname')}
          />
          <button className="edit-name-button" type="submit">
            Save
          </button>
        </div>
        <div className="update-name__col-right">
          <input
            type="text"
            id="lastname"
            className="update-name__input"
            //   placeholder={userName.lastName} {...register('lastname')}
          />
          <button
            className="edit-name-button"
            onClick={() => setEditProfile(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}
