"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";


const PromptCardList = ({ data }) => {
  return (
    <div className='gap-2 flex sm:flex-col flex-wrap md:flex-row justify-center items-center md:w-screen'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          
        />
      ))}
    </div>
  );
};

const FeedFirstPage = () => {
  const [allPosts, setAllPosts] = useState([]);

   const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(allPosts); 

 
  return (
    <section className='mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2'>
   
      {/* All Prompts */}
    
        <PromptCardList data={allPosts}  />
    
    </section>
  );
};

export default FeedFirstPage;