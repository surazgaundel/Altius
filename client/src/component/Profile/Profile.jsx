import React from 'react'
import ImageUpload from '../Upload/imageUpload'

export default function Profile() {
  const [userData, setUserData] =useState({
    name:'',
    file:null,
    bio:''
  })

  const handleChange=()=>{
    
  }
  return (
    <div>Profile
      <div>
        <form>
          <label>Name
            <input type="text" name="name"/>
          </label>
          <label>Bio
            <textarea type="text" name="bio"/>
          </label>
        </form>
      <ImageUpload/>
      </div>
    </div>
  )
}
