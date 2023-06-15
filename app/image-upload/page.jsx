'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ImageUpload from "@components/ImageUpload";


const UploadImage = () => {
 
 /*
  const ruter = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState({ imageUrl: "" });

  const uploadImage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  }

   try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({
         imageUrl:imageUrl
        }),
        
      });


      if (response.ok) {
        ruter.push("/");
        console.log('router pushed');
        console.log(response);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }; */

  const [img, setImg] = useState({ secureUrl: "" });
  const uploadImage = async (e) => {
    e.preventDefault();
   


  try {
    await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({ imageUrl:img.secureUrl })
    });
    console.log('Image uploaded url sent to the nextjs api for the database storing.')
   
    
  

    if (response.ok) {
      ruter.push("/");
      console.log('router pushed');
      console.log(response);
    }
  } 
    catch (error) {
    
      console.error('Error sending data to the api:', error.message)
      }
  } 


  return (
    <>
      <ImageUpload
        img={img}
        setImg={setImg}
        handleSubmitDb={uploadImage}

      />
      </>
  );
};
export default UploadImage
