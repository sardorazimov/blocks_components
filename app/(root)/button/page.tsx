/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { FadeTextDemo } from '@/components/Text'
import { GithubIcon, Heart, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div >
       <div className='flex   w-full h-12 my-2 justify-between  '>
           <div className='grid grid-cols-4 gap-4'>
            <Heart className='text-rose-700 cursor-pointer' />
            <Star className='text-orange-600' />
            <Link href={'/'}>
            <GithubIcon  className='text-white'/>
            </Link>
            </div>          
            <div className=''>
              <input type="text"  className='rounded w-[385px] h-[2rem]' placeholder='Button..??'/>
            </div>
          </div> 
      <div className=' bg-slate-800 w-full h-screen'>
        <div className="w-full mx-auto text-center  py-4 bg-slate-900 rounded border border-gray-800">
          <div className="text-3xl font-bold leading-tight
            text-white sm:text-4xl xl:text-5xl mb-6"></div>
          <p className="mb-4 text-white">We are creating a tool that helps you be more productive and efficient when building
            websites and webapps</p>
          {/**
                 *  <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                </div> 
                 */}
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950 ">
            <div className="relative">
              <img className="w-full h-48 object-contain" src="/img/2.png" />
              <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New
              </div>
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>


          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950">
            <div className="relative">
              <img className="w-full h-48 object-contain" src="/img/1.jpeg" />
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>


          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950">
            <div className="relative">
              <img className="w-full h-48 object-contain" src="/banner.png" />
              <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">New</div>
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>

          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950">
            <div className="relative">
              <img className="w-full h-48 object-contain" src="/img/3.png" />
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>


          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950">
            <div className="relative">
              <img className="w-full h-48 object-cover" src="/img/4.jpg" />
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>


          <div className="transition hover:transition-opacity bg-white rounded-xl shadow-lg overflow-hidden border border-purple-800 hover:shadow-purple-900 hover:border-purple-950">
            <div className="relative">
              <img className="w-full h-48 object-cover" src="/layout.png" />
              <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">3 min read
              </div>
            </div>
            <div className="p-4">
              <div className="text-lg font-medium text-gray-800 mb-2">Title</div>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed
                egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default page
