import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

const ShowUserNotes = (props) => {
        const [alldata,setAllData] = useState([])
    useEffect(()=>{
        async function getUserPost(){
           let res = await axios.get(`http://localhost:8083/posts/user/${props.id}`)
           let data = res.data.data
           console.log(data)
           setAllData(data)
         } 
         getUserPost()

       },[props.value])

       const handleDelete = async(ans)=>{
        console.log(ans)
        let res = await axios.delete(`http://localhost:8083/posts/delete/${ans._id}`);
        console.log(res.data.data)
        props.setValue(!props.value)

       }
  return (
    <div className='row m-0 p-0 justify-content-center my-3 gap-2'>
      {alldata.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
            <MdDelete onClick={()=>handleDelete(ele)} size={25}/>

{<img src={ele.image} height={200} width={200} className="card-img-top" alt="..." />}
  <div className="card-body">
    <h5 className="card-title">{ele.title}</h5>
    <p className="card-text text-truncate">{ele.description}</p>
   
    <Link to="/single" state={ele} className="btn btn-primary">View Full note</Link>
  </div>
</div>

      })}
    </div>
  )
}

export default ShowUserNotes
