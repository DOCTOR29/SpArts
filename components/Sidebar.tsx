import { Banknote, BarChartBig, CalendarClock, FileQuestion, Ghost, LucideUserCheck2, School2Icon, Search, User, Users } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Image from "next/image"
import moment from "moment"

function Sidebar() {
  return (
      <div className=" overflow-y-auto flex flex-col xl:pt-[5rem] pt-2 relative space-y-1 xl:space-y-4 text-center dark:bg-slate-900 bg-blue-100 h-screen ">
           <div className='text-sm flex top-5  absolute flex-col w-full justify-center items-center text-center font-medium -space-x-10 ' >
          <Image width={250} height={20} src={'/logo.png'} className=' mb-2 dark:invert' alt='SpArts Logo'></Image>
              {moment().format("ddd, MMM Do")} 
          </div>
          
          <h1 className="font-bold pt-[4rem]  "> Main Menu</h1>
          
          <Button variant="ghost"  >
              <BarChartBig className="mr-2"/>Dashboard</Button>
          <Button variant="ghost"  >
              <School2Icon className="mr-2"/>Academy Management</Button>
            
          <div className="xl:pt-20 pt-4 flex flex-col space-y-4  ">
          <h1 className="font-semibold ">More</h1>
              <Input type="text" className=" text-center bg-blue-200/90 dark:bg-blue-950 p-5 placeholder-white  w-5/6 m-auto rounded-lg" placeholder="&#x1F50E; Search Student ">
            </Input>
                  
              <Button variant="ghost" className=""  >
                  <Users className="mr-2" />Students</Button>
                  <Button variant="ghost"  >
                  <Banknote className="mr-2" />Fee Payment</Button>
                  <Button variant="ghost"  >
                  <FileQuestion className="mr-2" />Enquiries</Button>
                  <Button variant="ghost"  >
              <LucideUserCheck2 className="mr-2"/>Coaches</Button>
                  <Button variant="ghost"  >
              <CalendarClock className="mr-2"/>Schedule</Button>
          </div>  
    </div>
  )
}

export default Sidebar