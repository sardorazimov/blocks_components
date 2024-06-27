import { Copy, GithubIcon, Heart, QrCode, Share } from "lucide-react"
import Hero from "./Hero"


const Section = () => {
  return (
    <div className=" w-full h-screen">
      <div className="py-1  justify-between flex w-full h-[3.4rem] border border-gray-800">
         <h1 className="text-white my-3 ">More Ui Hero </h1>
         <div className="flex  justify-between">
            {/**landinf */}
            <div className="flex gap-2 transition-opacity cursor-pointer hover:animate-out">
            <div className="text-white my-3 mr-3 ">
                <QrCode />
            </div>
            <div className="text-white my-3 mr-3 ">
                <Share />
            </div>
            <div className="text-red-600 my-3 mr-3 ">
                <Heart  />
            </div>
            <div className="text-white my-3 mr-3 ">
                <GithubIcon />
            </div>
            <div className="text-white my-3 mr-3 ">
                <Copy />
            </div>
            </div>
       
         </div>
      </div>
      <section>
        <Hero />
      </section>
    </div>
  )
}

export default Section
