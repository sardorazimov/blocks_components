/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const page = () => {
 const pathname = usePathname()
 const router =   useRouter()
  return (
    <div className="flex  w-full h-screen ">
        <div className="w-[15rem] h-full bg-slate-950">
               <section className="relative transition ">
        <div className="mt-2 py-2 text-white text-xl text-center">
            <Link href={'/'}>Dashboard</Link>
        </div>
        <div className="rounded">
           {}
        </div>
        <div  className="border border-gray-800"/>
      </section>
      <div className="py-1 px-1 mt-3 my-3 h-full  w-full text-center">
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center ">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="relative py-4 my-2">
            <Link href={'/'} className="text-white text-center">Components</Link>
        </div>
        <div className="py-5 my-7 ">
            <Button className="bg-white text-gray-800 border border-purple-700 hover:bg-purple-700 hover:text-white">Upgarde</Button>
        </div>
        </div>  
        </div>
        <div></div>
       <div className="w-full ">
        <Section />
      </div>
    
    </div>
  )
}

export default page
