import React, { useState, useEffect } from 'react'
import { updateUser, getUser } from '../../redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import '../EditUserProfile/EditUserProfile.css'

export default function EditUserProfile() {
  const { firstName, lastName } = useSelector((state) => state.auth)
  const [editProfile, setEditProfile] = useState(false)
  const [name, setName] = useState({
    firstName: firstName,
    lastName: lastName,
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

  return (
    <div className="header">
      {editProfile ? (
        <>
          <h1>Welcome back</h1>
          <form
            onSubmit={handleSubmit(dispatchUser)}
            // onSubmit={dispatchUser}
            className="profile-update"
          >
            <div className="edit-name">
              <input
                type="text"
                id="firstname"
                className="inp-firstName"
                placeholder={name.firstName}
                {...register('firstname')}
                // onChange={handleInputs}
              />

              <input
                type="text"
                id="lastname"
                className=" inp-lastName"
                placeholder={name.lastName}
                {...register('lastname')}
                // onChange={handleInputs}
              />
            </div>
            <div className="btn">
              <button className="edit-profile_button" type="submit">
                Save
              </button>
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
  )
}
