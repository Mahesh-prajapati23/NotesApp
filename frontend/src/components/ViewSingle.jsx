import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewSingle = () => {
    let location = useLocation()
    console.log(location)
  return (
    <div>
      <h1 className='text-center my-2'>{location.state.title}</h1>
      <p>{location.state.description}</p>
    </div>
  )
}

export default ViewSingle
