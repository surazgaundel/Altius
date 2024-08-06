import React, {useState} from 'react'

export default function ImageUpload() {
    const [file, setFile] =useState();
    
    const handleImageUpload=(e)=>{
        const files = e.target.files[0];
        setFile(URL.createObjectURL(files));
    }
  return (
    <div>
        <div>
            <form>
                <input type="file" name="image"/>
                <button type="submit" onSubmit={handleImageUpload}>Upload</button>
            </form>
        </div>
    </div>
  )
}
