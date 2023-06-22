"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  const [selectedImage, setSelectedImage] = useState(null);
 

  const [imgUrl, setImgUrl] = useState();

  const [post, setPost] = useState({ prompt: "", tag: "", medium:"", imageUrl:""});
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
        medium: data.medium, 
        imageUrl:data.imageUrl
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  console.log('Initial post, before editting: ', post);

  const handleFileUpload = (event) => {
    setSelectedImage(event.target.files[0]);
   
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', 'artkonext');
    try {
      const data = await fetch('https://api.cloudinary.com/v1_1/dlel1msov/image/upload',
        {
          method: 'POST',
          body: formData
        }).then(r => r.json());
      const secureUrl = data.secure_url;
     setImgUrl(secureUrl);
      
      console.log('Image uploaded successfully!', data);
      console.log('the url that will be passed:', secureUrl);
    } catch (error) {
      console.error('Failed to upload image.');
    }
  };






  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
   

    if (!promptId) return alert("Missing PromptId!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt:post.prompt,
          tag:post.tag,
          medium:post.medium, 
          imageUrl: imgUrl?imgUrl: post.imageUrl 
        }),

      });
    

  


      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <> <section className='relative max-lg:w-screen mx-auto flex start flex-col gap-5 items-center justify-center'>
    <input type="file" accept="image/*" onChange={handleFileUpload} />
    {selectedImage && (
      <div>
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" height="200" />
          <button type="submit" className='px-5 py-1.5 text-sm border-black rounded shadow text-marron-oscuro' onClick={handleSubmit}>Upload another image</button>

      </div>
    )}
  </section>
 
    <Form
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
        imgUrl={selectedImage?imgUrl:post.imageUrl}
      />
      </>
  )
};

export default UpdatePrompt;