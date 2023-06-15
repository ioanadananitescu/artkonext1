'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { connectToDB } from '@utils/database';
import { Imagine } from '@models/image';
import { data } from 'autoprefixer';


const ImageUpload = ({img, setImg, handleSubmitDb}) => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async (event, res) => {
    event.preventDefault();
   const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'artkonext');
    
try{
  const response = await fetch('https://api.cloudinary.com/v1_1/dlel1msov/image/upload', {
    method: 'POST',
    body: formData
  }).then((r)=>r.json());
  const secureUrl = response.secure_url;
  
  setImgUrl(secureUrl);
  console.log('Image loaded with the secure url:', secureUrl);
  console.log('The result is:', response)
  
    } catch (error) {
    console.error('Error uploading image:', error.message);
    }

 
        
    
    
/*     const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset','artkonext');
   
      try {
        const { data: response } = await axios.post(
          'https://api.cloudinary.com/v1_1/dlel1msov/image/upload',
          formData
        );
        console.log(response);
 
      
        
      
      } catch (error) {
        console.error(error);
      } */
    
   
  };



  return (
    <>
      <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
       
        <label>{filename}</label>
      </div>

      <button className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        type="submit" onClick={handleSubmit}>Upload
      </button>

       <label>
        <span>This is the img url</span>
          <input className='form_input' value={{imgUrl}} placeholder='It will be displayed the url of the uploaded image'></input>
      </label>
      <button className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        type="submit" onClick={handleSubmitDb}>Upload to Mongodb
      </button>
    
      </>
  );
};

export default ImageUpload;
