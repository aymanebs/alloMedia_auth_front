import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Register from './components/Auth/Register.jsx'
import Login from './components/Auth/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Register /> */}
    <Login />
  </StrictMode>,
)