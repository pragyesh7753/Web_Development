import React from 'react'
import "./App.css"
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router'

function App() {
  const Navigate = useNavigate()

  const location = useLocation()
  console.log(location)

  return (
    <div>
      <ul>

        <button onClick={() => Navigate(-1)}>Back Button</button>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <button onClick={() => Navigate("/contact")}>Go to Contact</button>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default App
