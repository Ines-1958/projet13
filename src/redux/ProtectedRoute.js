import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

/**ProtectedRoute permet de sécuriser la route de telle sorte que seul
 * un utilisateur authentifié puisse accéder à la page de profil
 */

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth)
  let location = useLocation()

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute
