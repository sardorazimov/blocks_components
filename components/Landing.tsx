'use client'
import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Navigation } from './Navigation'
import LandingHero from './LandingHero'
import { useRouter } from 'next/navigation'

const Landing = () => {
  const router = useRouter()
  return (
    <div className='   '>
      <section className=" ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font  text-8xl mb-4 font-bold ">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed ">
              Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
              tousled. Chambray dreamcatcher trust fund, kitsch vice godard
              disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
              Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
              booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button onClick={() => router.push('/dashboard')}
                className="inline-flex  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Go Dashboard
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <LandingHero />
    </div>
  )
}

export default Landing
