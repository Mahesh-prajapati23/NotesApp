import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'


const Navbar = () => {
  let ctx = useContext(UserContext)
  console.log(ctx.details.login)
  let login = ctx.details.login
  let navigate = useNavigate()
  const handleLogout = ()=>{
    ctx.setDetails({login:false,userId:""})
    localStorage.removeItem('userDetails')
    navigate('/login')

  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Notes app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {login===true  && <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>}
        {login===false && <li className="nav-item btn btn-info mx-2">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>}
        {login===false && <li className="nav-item btn btn-success">
          <Link className="nav-link active" aria-current="page" to="/register">Signup</Link>
        </li>}
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
       {login===true &&  <li onClick={handleLogout} className="nav-item">
          <Link className="nav-link" >Logout</Link>
        </li>}
        
       
      </ul>
    
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
