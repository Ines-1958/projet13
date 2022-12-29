import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { logOut } from '../../redux/slices/authSlice'

export default function Navbar() {
  const { firstName, token } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      {token === null ? (
        <NavLink to="/login" className="main-nav-item">
          {/* <FaUserCircle size={18} /> */}
          Sign In
        </NavLink>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/profile">
            {/* <FaUserCircle size={18} /> */}
            {`${firstName}`}
          </NavLink>
          <NavLink
            className="main-nav-item"
            to="/"
            onClick={() => dispatch(logOut())}
          >
            {/* <FaSignOutAlt /> */}
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  )
}
