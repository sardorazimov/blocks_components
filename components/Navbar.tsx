"use client"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ModeToggle } from './theme'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className=''>
            <div className='w-full h-18  '>
                <nav className="  fixed top-4 border  mx-auto inset-x-0 z-50  lg:w-full rounded" >
                    <div className="hidden lg:block w-full">
                        <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent transition duration-200">
                            <div className="flex flex-row gap-2 items-center">
                                <a className="text-2xl flex space-x-2 items-center mr-4   px-2 py-1  relative z-20" href="/">
                                    <img src='/logo.svg' className="h-5 w-6   rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm text-black" />
                                    
                                    <span className="font-medium ">blocks</span>
                                </a>
                                <div className="flex items-center gap-1.5">
                                    <Button className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md " 
                                    onClick={() => router.push('/apu')}
                                    >Api</Button>
                                    <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md    " href="/blog">Blog</a>
                                    <a className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md   " href="/contact">Contact</a>
                                    <Button className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md dark:bg-white dark:text-black "
                                     size={'lg'} onClick={() => router.push('/page')} >dashboard</Button>
                                </div>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <div className="w-10 h-10 flex hover:bg-gray-50 dark:hover:bg-white/[0.1] rounded-lg items-center justify-center outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none overflow-hidden">
                                <ModeToggle />
                                </div>
                                <a className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex
   items-center justify-center dark:text-white  dark:hover:shadow-xl" href="/login">Login</a>
                                <a className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center
    justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]" href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-full w-full items-center lg:hidden ">
                        <div className="flex justify-between bg-white dark:bg-neutral-900 items-center w-full rounded-full px-2.5 py-1.5 transition duration-200">
                            <a className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20" href="/">
                                <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm">
                                </div>
                                <span className="font-medium text-black dark:text-white"></span>
                            </a><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-black dark:text-white h-6 w-6" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg"><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z">
                                </path></svg>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
