import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Login = () => {
  let emailRef = useRef()
  let passwordRef = useRef()

  let navigate = useNavigate()

  let ctx  = useContext(UserContext)

  // console.log(ctx)

async function handleSubmit(e){
    e.preventDefault()

    let obj ={
      email:emailRef.current.value,
      password:passwordRef.current.value

    }
    // console.log(obj)
    let res  = await axios.post('http://localhost:8083/users/login',obj)
    if(res.data.success===true){
      console.log(res.data)
      localStorage.setItem('userDetails', JSON.stringify({login:true,userId:res.data.existingUser._id}))

      ctx.setDetails({login:true,userId:res.data.existingUser._id})

      navigate('/')
    }
    else{
      alert(res.data.msg)
    }
}
  return (
    <div>
      
     <form className='col-5 m-auto mt-4 border border-success rounded p-4'>
        <h3 className='text-center'>Login page</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
    
    <p className='text-center'>Don't have an account <Link to="/register">Signup</Link></p>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}

export default Login
