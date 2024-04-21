import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
 
  return (
    <div>
      <div>
        User: tony <br/>
        First Name: nguyen <br />
        Email: tony@gmail.com <br />
      </div>

      <nav>
        <li><Link to="/user/account">Account</Link></li>
        <li><Link to="/user/profile">Profile</Link></li>
      </nav>

      <Outlet />

    </div>
  )
}

export default User