'use client'

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "./ui/background";
import Link from 'next/link'
import LandingHero from './LandingHero'
import { useRouter } from 'next/navigation'
import { Button } from "./ui/button";

const Landing = () => {
  const router = useRouter()
  return (
    <div className='   '>
      <div className="relative flex h-screen w-full  overflow-hidden rounded-lg  p-20 ">
        <div className="py-14 my-8 w-full">
          <h1 className="text-center text-8xl text-gray-950 dark:text-white">Welocme to blocks components

          </h1>
          <div className="my-2 py-1  w-full flex items-center justify-center">
            <span className="text-xl text-neutral-600 dark:text-neutral-400 text-center ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor tempore accusamus cupiditate.
            </span>
          </div>
          <div className="my-1 flex w-full items-center justify-center">
            <p className="text-xl dark:text-neutral-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quis officiis consectetur cumque blanditiis aut omnis.
            </p>
          </div>
          <div className="flex  gap-4 my-12 py-8 w-full items-center justify-center">
            <Button  onClick={() => router.push('/dashboard')}
            className="bg-neutral-600 border">
              Components
            </Button>
            <Button>
              Docs blocks
            </Button>
          </div>
        </div>

        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent w-full )]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
      <LandingHero />
    </div>
  )
}

export default Landing
