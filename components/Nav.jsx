"use client";


import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import ThemeSwitch from './ThemeSwitch';


const Nav = () => {

    const{data:session}=useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropDown, setToggleDropDown]=useState(false)
    const fetchProviders= async()=>{
        const response= await getProviders();
        setProviders(response);
    }
    useEffect(()=>{
        fetchProviders();
    }, []);
    
 
    const handleSignOut = async () => {
       
        await signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}`
        });
        
    }


  return (
 <nav className="flex-between w-full mb-16 pt-3">
  <Link href="/" className="flex px-10 gap-2 flex-center">
        <Image 
        width={50}
        height={70}
        alt="Artko: online art platform. Our logo"
        src="/assets/images/logoArtko5.svg"
        className="object-contain" />
    </Link> 
{/*/ Desktop Navigaton*/}
          <div className="hidden sm:flex ">
              <ThemeSwitch/>
    {session?.user ? (
        <div className="flex gap-1 md:gap-1">
            <Link href="/create-prompt" 
            className=" outline_btn z-50">
                Create Post
            </Link>
                      <button type="button" onClick={() => {
                          handleSignOut();
                      }}
            className="outline_btn z-50">
                Sign Out
            </button>
            <Link href="/">
                          <Image
                              
                src={session?.user.image}
                width={37}
                height={37}
                alt="If the user has a profile image here it will be dislayed"
                className="rounded-full"/>

            </Link>
            </div>
    ):
    (
    <>
    {providers && 
    Object.values(providers).map((provider)=>(
        <button
         type="button" 
         key={provider.name} 
        onClick={()=>signIn(provider.id, {
            callbackUrl: `${window.location.origin}/dashboard`,
          })}
        className="outline_btn z-50">
            Sign In


        </button>
    ))}
                          
    
    </>)}

          </div>
          
          {/*Mobile Navigation*/}
          <div className="sm:hidden flex relative">
              
              {session?.user ? (
                  <div className='relative flex'>
    <Image          
      src={session?.user.image}
        width={30}
        height={30}
        alt="If the user has a profile image here it will be dislayed"
        className="rounded-full z-50"
                          onClick={() => setToggleDropDown((prev) => !prev)} />
                      
        {toggleDropDown && (
      <div className="dropdown z-50">
      <Link href="/" 
           className="tracking-wide text-md text-primary-orange hover:text-amber-400 font-semibold">
       My Profile
       </Link>
       <Link href="/create-prompt" 
            className="rounded-full"
            onClick={()=>setToggleDropDown(false)}>
      Create Prompt
      
                              </Link>
       <button
            type="button"
            onClick={() => {
                setToggleDropDown(false);
                handleSignOut();
             
            }            
 }
  className="outline_btn mt-5 w-full">          
       Sign Out
       </button>
       </div>
            
                      )}
                      </div>
                  
              ): (
              <>
                {providers && 
                Object.values(providers).map((provider)=>(
                    <button
                     type="button" 
                     key={provider.name} 
                    onClick={()=>signIn(provider.id)}
                    className="outline_btn z-50">
                        Sign In
            
            
                    </button>
                ))}
                
                </>
                      
              )
              }
      
         </div>
          
 </nav>
  )
}

export default Nav