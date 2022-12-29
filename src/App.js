import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Profil from './pages/Profil/Profil'
import ProtectedRoute from './redux/ProtectedRoute'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profil />} />
      </Routes>
    </div>
  )
}

export default App
