import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {
    let navigate = useNavigate()
    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()

    const handleSubmit = async(e)=>{
        e.preventDefault()
           let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
           }

           console.log(obj)
          if(!obj.name){
            alert("name is required")
            return
          }
          if(!obj.email){
            alert("email is required")
            return
          }
          if(!obj.password){
            alert("password is required")
            return
          }

          try {
            let res = await axios.post('http://localhost:8083/users/register',obj)
            console.log(res.data)
            if(res.data.success===true){
              navigate('/login')

            }
            else{
              alert(res.data.msg)
            }
          } catch (error) {
            console.log(error)
          }
           
    }
  return (
    <div>
        <form className='col-5 m-auto mt-4 border border-success rounded p-4'>
        <h3 className='text-center'>Signup page</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" ref={nameRef} className="form-control" id="name" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" />
  </div>
    
    <p className='text-center'>Already have an account <Link to="/login">Login</Link></p>
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
