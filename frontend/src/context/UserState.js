import React, { useState } from 'react'
import UserContext from './UserContext'
const UserState = (props) => {
  let userDetails  = JSON.parse(localStorage.getItem('userDetails'))
    const [details, setDetails] = useState({
        login:userDetails? true:false,
        userId:userDetails? userDetails.userId:""
    })
    console.log(details)
  return (
    <UserContext.Provider value={{details,setDetails}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserState
