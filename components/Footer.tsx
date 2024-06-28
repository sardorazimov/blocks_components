/* eslint-disable @next/next/no-img-element */
import { DiscIcon, Github, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-t border-gray-900 dark:border-white'>
      <footer className=' z-10'>
        <Link href={'/'} className='text-bold text-2xl mx-auto flex text-slate-900 dark:text-neutral-200 py-4'>blocks
        <img src="/logo.svg" alt="Footer logo" className='w-8 mx-1 text-black' />
        </Link>
        <div className='flex flex-col md:flex-row items-center max-w-6xl px-6  mx-auto'>
         <div className='w-full '>
          <h1></h1>
         </div>
         <div className='flex w-full md:w-1/2 justify-between'>
         <section>
          {} 
         </section>
         <div className='flex gap-4 '>
         <Link href={'/'}>
            <Instagram />
        </Link> 
         <Link href={'/'}>
            <Github />
        </Link> 
         <Link href={'/'}>
         <FaDiscord />

        </Link> 
         </div>
         </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
