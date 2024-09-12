import axios from 'axios'
import React from 'react'

const Uploader = () => {

    const handleChanger = async(e) => {
        const file = e.target.files[0]

        let formdata = new FormData()
            formdata.append('file',file)
            formdata.append('upload_preset','trialapp') //trial app is your cloudinary upload preset name

            let res = await axios.post('https://api.cloudinary.com/v1_1/dxwivxfid/upload',formdata)// dxwivxfid is your cloudinary name
            let data = res.data
            console.log(data.secure_url)

    }


  return (
    <div>
      <label className='btn btn-success' htmlFor="file">Upload</label>
      <input onChange={handleChanger} id='file' type="file" hidden />
    </div>
  )
}

export default Uploader;