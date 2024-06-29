/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ApiExample = () => {
    return (
        <div className='flex flex-col w-full  h-screen'>
            <div className=''>
                <div className='py-8 mx-1'>
                    <h1 className='text-bold text-7xl text-center py-3'>Api Example</h1>
                    <div className='justify-center items-center flex flex-col '>
                        <span className='text-violet-600 text-3xl text-center'>
                            What is an API?
                        </span>
                        <p className=' rounded text-center w-1/2 text-bold'>
                            An API, which stands for application programming interface, is a set of protocols that enable
                            different software components to communicate and transfer data. Developers use APIs to bridge the gaps between small, discrete chunks of code in order to create applications that are powerful, resilient,
                        </p>
                    </div>

                </div>
                <div>
                    <section>

                    </section>
                </div>
                <div className='py-12 flex items-center justify-center'>
                    <img src="/api.png" alt="" className='object-fill' />
                </div>
            </div>
            <div className=' py-1 flex w-full ' />
            <div className=' w-full '>
                <h1 className='text-center text-4xl font-bold '>More Example</h1>
                <div className='flex justify-between '>
                    <div className='py-3 mx-1'>
                        <h1 className='text-3xl'>Step One</h1>
                       <h2>
                       In the early 2000s, web APIs emerged as a new method for emerging 
                       startups to not only make products and services available online, but to also enable partners and third-party resellers to extend the reach of their platforms. This era of APIs was defined by Salesforce, eBay, and Amazon, and these
                        companies continue to dominate the API playing field today.
                        </h2> 
                    </div>
                    <img src="indir.png" alt="" className='' /> 
                </div>
                <div className='flex justify-between'>
                    <img src="indir1.png" alt="" />
                    <div>
                    <div className='py-3 mx-1'>
                        <h1 className='text-3xl'>Step One</h1>
                       <h2>
                       In the early 2000s, web APIs emerged as a new method for emerging 
                       startups to not only make products and services available online, but to also enable partners and third-party resellers to extend the reach of their platforms. This era of APIs was defined by Salesforce, eBay, and Amazon, and these
                        companies continue to dominate the API playing field today.
                        </h2> 
                    </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div>
                    <div className='py-3 mx-1'>
                        <h1 className='text-3xl'>Step One</h1>
                       <h2>
                       In the early 2000s, web APIs emerged as a new method for emerging 
                       startups to not only make products and services available online, but to also enable partners and third-party resellers to extend the reach of their platforms. This era of APIs was defined by Salesforce, eBay, and Amazon, and these
                        companies continue to dominate the API playing field today.
                        </h2> 
                    </div>
                    </div>
                    <img src="indir2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ApiExample
