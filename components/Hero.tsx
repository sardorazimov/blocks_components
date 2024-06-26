/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Blocks, Copy, Heart, Link2, MoveRightIcon, Share } from 'lucide-react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex w-full h-full'>
            <div className='w-full flex my-3 h-[3rem]  justify-between'>
                <div className='flex md:flex'>
                    <h1 className='text-2xl text-white'>Landing Hero section more components</h1>
                </div>
                <div className='flex mr-3'>
                    <input type="text" className='rounded w-[416px] h-[40px] ' placeholder='Button???' />
                </div>
            </div>
            <div className='grid grid-cols-4 md:bgid-cols-1 gap-5 py-1 mx-1 '>
                <div className='w-[15rem]  h-[15rem] border rounded hover:border-rose-400  border-slate-700 shadow shadow-slate-800 '>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/1.jpeg" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem] rounded border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full  h-hull'>
                        <Link href={'/'}>
                            <img src="/img/2.png" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem] rounded border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/3.png" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem]   rounded  border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/4.jpg" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem] border rounded hover:border-rose-400  border-slate-700 shadow shadow-slate-800 '>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/1.jpeg" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem] rounded border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full  h-hull'>
                        <Link href={'/'}>
                            <img src="/img/2.png" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem] rounded border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/3.png" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>
                <div className='w-[15rem]  h-[15rem]   rounded  border border-slate-700 shadow shadow-slate-800'>
                    <div className='w-full   h-hull'>
                        <Link href={'/'}>
                            <img src="/img/4.jpg" alt="" className='object-cover' />
                        </Link>
                        <div className='w-full felx '>
                            <h1 className='text-center text-white' >Hero section</h1>
                        </div>
                        <div className='flex gap-7 cursor-pointer transition-opacity'>
                            <Copy className='text-white' />
                            <Heart className='text-red-600' />
                            <Link2 className='text-white' />
                            <Blocks className='text-white' />
                            <MoveRightIcon className='text-white' />

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Hero
