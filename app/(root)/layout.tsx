import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'

import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const RootLayout = async ({children}:{children:ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if(!isUserAuthenticated)redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <link rel="stylesheet" href="/" className='flex items-center gap-2' />
        <Image src ='/logo.svg' alt="logo" width={40} height={35}/>
        <h2 className='text-primary-100'>Interview Prep </h2>      
      </nav>
      {children}

    </div>
  )
}

export default RootLayout
