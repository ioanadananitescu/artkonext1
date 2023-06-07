'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";


const CreatePrompt = () => {
 
  const { data: session } = useSession();
  const ruter = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
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
  };

  return (
    <Form
      session={session}
      type='Add New'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};
export default CreatePrompt