import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
const NavBar = () => {
  return (
    <>
        <nav class="navbar  navbar-expand bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <Link class="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/destination"}>Destination</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/about"}>About</Link>
                    </li>
                </ul>
                <Link className='btn btn-primary mx-1' to="/login">Login</Link>
                <Link className='btn btn-primary mx-1' to="/sign-up">SignUp</Link>
            </div>
        </nav>
    </>
  )
}

export default NavBar
