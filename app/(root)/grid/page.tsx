/* eslint-disable react/jsx-no-undef */
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary p-6">
          
            <h2 className="text-xl font-bold text-primary-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">
       
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 text-primary hover:text-primary-foreground"
              prefetch={false}
            >
   
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-secondary p-6">
           
            <h2 className="text-xl font-bold text-secondary-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">

            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 text-secondary hover:text-secondary-foreground"
              prefetch={false}
            >
        
     
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-muted p-6">
           
            <h2 className="text-xl font-bold text-muted-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">
            
            </p>
            <Link href="#" className="inline-flex items-center mt-4 text-muted hover:text-foreground" prefetch={false}>

            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-accent p-6">
         
            <h2 className="text-xl font-bold text-accent-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 text-accent hover:text-accent-foreground"
              prefetch={false}
            >
            
  
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-primary p-6">
            <h2 className="text-xl font-bold text-primary-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">
             
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 text-primary hover:text-primary-foreground"
              prefetch={false}
            >
           
          
            </Link>
          </div>
        </div>
        <div className="bg-background rounded-lg shadow-md overflow-hidden">
          <div className="bg-secondary p-6">
   
            <h2 className="text-xl font-bold text-secondary-foreground mt-4"></h2>
          </div>
          <div className="p-6">
            <p className="text-muted-foreground">
             
            </p>
            <Link
              href="#"
              className="inline-flex items-center mt-4 text-secondary hover:text-secondary-foreground"
              prefetch={false}
            >
    
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}


export default page
