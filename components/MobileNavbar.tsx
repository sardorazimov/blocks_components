"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <header className='flex-between fixed h-16 w-full border-b-4  bg-gray-900 p-5 lg:hidden'>
      <Link href="/" className="flex items-center gap-2 md:py-2">
        blocks
      </Link>
      <nav className=" ">
        <div className="">
          <Sheet>
            <SheetTrigger>
           <MenuIcon className="text-white" />
            </SheetTrigger>
            <SheetContent className="focus:ring-0 bg-gray-950 text-white focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none  sm:w-64">
             {}
              <>
               blocks

              <ul className=" mt-8 flex w-full flex-col items-start gap-5;">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                    className={`${isActive && 'bg-gray-900 bg-cover bg-clip-text text-transparent'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}
                    >
                    <Link className=" p-16-semibold flex size-full gap-4 p-4 cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>
        </div>
  {/** */}
       
      </nav>
    </header>
  )
}

export default MobileNavbar