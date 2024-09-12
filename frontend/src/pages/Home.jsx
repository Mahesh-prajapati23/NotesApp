import React, { useContext, useEffect, useRef, useState } from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'
import ShowUserNotes from '../components/ShowUserNotes'

const Home = () => {
  let titleRef = useRef()
  let decRef = useRef()
  const [clicked,setClicked] = useState(false)
  const [value ,  setValue] = useState(false)
  const [finalImage,setgFinalImage]= useState("")
  let ctx = useContext(UserContext)
  const handleFormSUbmit= async(e)=>{
    console.log(ctx)
    e.preventDefault();
    let obj = {
      title:titleRef.current.value,
      description:decRef.current.value,
      user:ctx.details.userId,
      image:finalImage
    }
    console.log(obj)
    let res = await axios.post('http://localhost:8083/posts/create',obj)
    // console.log(res)
    if(res.data.success===true){
      alert(res.data.msg)
      setValue(!value)
    }else{
      alert(res.data.msg)
      console.log(res.data)
    }
  }


  const handleChanger=(e)=>{
    console.log("hello")
    console.log(e.target.files[0])

    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = ()=>{
      console.log(reader.result)
      setgFinalImage(reader.result)


    }

    reader.onerror=()=>{
      console.log(reader.error)
    }
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={ ()=>setClicked(true)}>create</button>
     { clicked && <form action="">
        <label htmlFor="">Title</label>
        <input ref={titleRef} type="text" />
        <label htmlFor="">Description</label>
        <textarea ref={decRef} name="" id=""></textarea>
        <label className='btn btn-primary' htmlFor="file">Upload image</label>
        <input onChange={handleChanger} id='file' type="file"  hidden/>
       {finalImage && <img height={200} width={200} src={finalImage} alt="" />}

        {/* <label htmlFor="b">Male</label>
        <input type="radio"  id='b'/>
        <label htmlFor="a">FeMale</label>
        <input type="radio" id='a'/> */}

       
        <button onClick={handleFormSUbmit}>submit</button>
      </form>}
      
      <ShowUserNotes value = {value} setValue={setValue} id={ctx.details.userId}/>
    </div>
    
  )
}

export default Home
