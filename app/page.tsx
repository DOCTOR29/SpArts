"use client"
import BarChartRevenue from "@/components/BarChartRevenue"

import DoughnutChart from "@/components/DoughnutChart"
import {DataTable} from "@/components/DataTable"
import { Events, columns } from "@/components/SecheduleTableData"
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

import { DownloadIcon, Plus, PlusSquare } from "lucide-react"
import Header from "@/components/Header"

const data: Events[] = [
  {
    id: "728ed52f",
      coach: 'Cynthia Jones',
      date: `Fri, 01, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Begineers Badminton Class'
      },
  {
    id: "728ed522",
      coach: 'Adridom Sarma',
      date: `Mon, 21, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'International Badminton Class'
      },
  {
    id: "728ed5211",
      coach: 'Suman Baruah',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Staff Meeting'
      },
  {
    id: "728ed5211",
      coach: 'Naveed Islam',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Yoga Competition'
      },
  {
    id: "728ed5211",
      coach: 'Afreed Islam',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Staff Meeting'
      },
  {
    id: "728ed5211",
      coach: 'Rahul Roy',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Crossfit Training'
      },
  {
    id: "728ed5211",
      coach: 'Drishanta Shivam',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Logical Aptitude Training'
      },
  {
    id: "728ed5211",
      coach: 'Rohan Patel',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Vocabulary Training'
      },
  {
    id: "728ed5211",
      coach: 'Yuvraj Sarmah',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Skill Training'
      },
  {
    id: "728ed5211",
      coach: 'Kapil Singh',
      date: `Tue, 03, Sep`,
      time: "3:00 PM - 7:30 PM",
      event: 'Soft Skill Training'
      },
      ]
    // ...





function page() {
 
  return (
    <div className="flex flex-col xl:space-y-5 px-7 ">
      <Header />
      <div className="flex flex-col xl:flex-row xl:space-x-3  ">
        
        <Card className=" mt-3 xl:mt-0 w-full xl:w-1/2  p-5">
          <CardHeader >
          <div className="flex items-center flex-row justify-between pb-2">
            <h2 className="text-sm text-slate-400 dark:text-slate-400 tracking-wide">ACTIVE STUDENTS</h2>
            <h2 className="text-sm text-end text-slate-400 tracking-wide">ACTIVE COACHES</h2>
          </div>
          <Separator/>
          <div className="flex justify-between pt-2">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200 tracking-wide">5,000</h2>
            <h2 className="text-2xl font-semibold text-slate-700  dark:text-slate-200 tracking-wide">5</h2>
            </div>
            </CardHeader>
        </Card>

        <Card className="w-full xl:my-0 my-3 xl:w-1/2 p-5 dark:text-slate-200">
        <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
          <CardContent >
            <div className="flex flex-col 2xl:flex-row space-y-3 2xl:space-y-0 justify-between">
              <Button>
              <Plus className="mr-2"/> Add new Student</Button>
              <Button>Collect Fees</Button>
              <Button> <Plus className="mr-2"/> Add new Enquiry</Button>
           </div>
          </CardContent>
        </Card>

      </div>
      <div className="flex  flex-col xl:flex-row xl:space-x-3">
        <Card className="p-5  w-full xl:w-1/2 ">
          <div className="flex flex-row-reverse items-center justify-between">
          <div>
          <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select date" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Date</SelectLabel>
          <SelectItem   value="Last 7 Days">Last 7 Days</SelectItem>
          <SelectItem value="Last Months">Last  Months</SelectItem>
          <SelectItem value="Last  Months">Last 2 Months</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
        
        </SelectGroup>
      </SelectContent>
              </Select>
              </div>
          <div>
              <h1 className="xl:text-lg text-xs font-semibold dark:text-slate-200 text-slate-700 tracking-wide">FEE PAYMENT SUMMARY</h1> 
              </div>
          </div>
          <Separator className="my-3" />
         
          <div className="p-5 flex" ><DoughnutChart /></div>
          

          <div className="flex h-5 xl:px-10 px-2 pb-3 items-center justify-between space-x-4 text-xs xl:text-lg font-semibold">
        <div>₹624,400 by 400 Students</div>
        <Separator orientation="vertical" />
        <div>₹624,400 by 400 Students</div>
        
        
      </div>


          
        
          
        </Card>
        <Card className="p-5 xl:my-0 my-3 w-full xl:w-1/2 ">
          <div className="flex flex-row-reverse items-center justify-between">
            
            
            
            <div className="flex flex-row-reverse items-center ">
            
              <DownloadIcon className="mx-3" />
          <Select>
      <SelectTrigger className="xl:w-[180px] w-[120px]">
        <SelectValue placeholder="Select date" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Date</SelectLabel>
          <SelectItem   value="Last 7 Days">Last 7 Days</SelectItem>
          <SelectItem value="Last Months">Last  Months</SelectItem>
          <SelectItem value="Last  Months">Last 2 Months</SelectItem>
          <SelectItem value="2023">2023</SelectItem>
        
        </SelectGroup>
      </SelectContent>
          </Select>
              </div>
          <div>
              <h1 className=" xl:text-lg text-xs font-semibold text-slate-700  dark:text-slate-200 tracking-wide">MONTH-ON-MONTH GROWTH</h1> 
              </div>
          </div>
          <Separator className="my-3" />
         <div className="flex flex-col 2xl:flex-row items-center justify-between space-x-4  text-lg font-semibold">
         
          

          
            <div className="flex flex-col p-4 justify-center">
              <h1 className="text-lg pb-3  font-light text-slate-500">Revenue</h1>
              
                <BarChartRevenue toggleData={true} />
              
              
              ₹624,400 by 400 Students</div>
        <Separator className="xl:h-10 h-0" orientation="vertical" />
        <div className="flex flex-col p-4 justify-center">
              <h1 className="text-lg pb-3  font-light text-slate-500">Students</h1>
              
                <BarChartRevenue toggleData={false} />
              
              
              ₹624,400 by 400 Students</div>
        
        
      </div>


          
        
          
        </Card>
      </div>

      {/* //data Table */}
      <div>
        <DataTable columns={columns} data={data} />
        <footer>
          <h4 className=" text-center text-sm pb-2 text-slate-400">This Dashboard is build as Demo for SpArts with NextJS by Naveed Islam</h4>
        </footer>
      </div>
    
    </div>
  )
} 

export default page   