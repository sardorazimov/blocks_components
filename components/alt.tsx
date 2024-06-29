/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Footer from './Footer'
import AnimatedGridPatternDemo from './background'

const Alt = () => {
  return (
    <div>
      <section className="py-8 z-10 font-serif">
        <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
          <div className="w-full md:w-1/2 py-8">
            <h1 className="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
              Brain <br /><span className="text-blue-500">Your Portfolio, <br /></span>blocks Components.
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-8">
            <img src="/a.svg" className="" />
          </div>
        </div>
      </section>
    
      <Footer />
    </div>
  )
}

export default Alt
