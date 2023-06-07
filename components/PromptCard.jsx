"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copy, setCopy] = useState("");
  const handleCopy = () => {
    setCopy(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopy(""), 3000);
  }
  return (
    <div className='prompt-card'>
      <div className='flex justify-between items-start gap-5'>
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image src={post.creator.image} alt="User profile image"
          width={40} height={40} className="rounded-full object-contain"/>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-marron-oscuro font ">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-marron-unpococlaro">{post.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image src={copy === post.prompt ?
            '/assets/icons/tick.svg'
            : '/assets/icons/copy.svg'
          }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="font-satoshi my-4 text-sm text-marron-oscuro">{post.prompt}</p>
      <p className="font-inter text-sm marron_gradient curson-pointer"
      onClick={()=>handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
    </div>
    
  )
}



export default PromptCard;