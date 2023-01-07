import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import { logOut } from '../../redux/slices/authSlice'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'

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
          <FaUserCircle className="icon faUserCircle" />
          Sign In
        </NavLink>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/profile">
            <FaUserCircle className="icon faUserCircle" />
            {`${firstName}`}
          </NavLink>
          <NavLink
            className="main-nav-item"
            to="/"
            onClick={() => dispatch(logOut())}
          >
            <FaSignOutAlt className="icon faSignOutAlt" />
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  )
}
