/* eslint-disable @next/next/no-img-element */
"use client"

import { navLinks } from '@/constants/index'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from './ui/button'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col '>
     <aside className="hidden h-screen w-72  shadow-md  lg:flex">
      <div className="flex  size-full flex-col gap-4">
        <Link href="/" className="lex items-center gap-2 md:py-2  text-2xl text-center">
          blocks
        </Link>
     
        <nav className="h-full flex-col justify-between md:flex md:gap-4 border">
          <div>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all  hover: hover:shadow-inner group ${
                    isActive ? 'bg-purple-gradient ' : ''
                  }`}>
                    <Link className="   font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4" href={link.route} >
                      <Image 
                        src={link.icon}
                        alt=""
                        width={24}
                        height={24}
                        className={`${isActive && '  rounded '}` }
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`flex-center  font-semibold text-[16px] leading-[140%] w-full whitespace-nowrap rounded-full bg-cover  transition-all hover
                     hover: hover:shadow-inner group ${
                    isActive ? 'bg-purple-gradient ' : ''
                  }`}>
                    <Link className=" font-semibold text-[16px] leading-[140%] flex size-full gap-4 p-4" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                {/**auth */}
              </li>
            </ul>
          </div>

          {/**auth */}
        </nav>
      </div>
    </aside> 
 
    </div>

  )
}

export default Sidebar