import MobileNavbar from "@/components/MobileNavbar"
import Sidebar from "@/components/sidebar"


const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className="flex h-screen w-full flex-col lg:flex-row ">
        <Sidebar />
        <MobileNavbar />
      <div className=" flex-1 overflow-auto  lg:mt-0 h-screen ">
        <div className=" w-full md:px-10 p-16-regular">
            {children}
        </div>
      </div>
    </main>
  )
}

export default layout
