'use client'

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

function signout() {
    const router = useRouter()
    const [session, loading] = useSession()
  
    const redirect = async () => {
      const data = await signOut({
        redirect: false,
      })
  
      router.push('/')
    }
  
    useEffect(() => {
      let isMounted = true
  
      if (session) redirect()
      else router.push('/login')
  
      return () => {
        isMounted = false
      }
    }, [session])
  
    return (
      <div>
        <h3>signed out</h3>
        <h1> see you soon</h1>
      </div>
    )
  }
  
  export default signout