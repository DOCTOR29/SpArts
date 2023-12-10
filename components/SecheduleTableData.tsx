"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Events = {
  id: string
  event: string
  date: string
  time: string
  coach: string
}

export const columns: ColumnDef<Events>[] = [
  {
    accessorKey: "date",
    // header: "Date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "coach",
    header: ({ column }) => {
      return (
        <div  className="text-left justify-end items-end">
        <Button
       className={cn("text-right justify-end items-end")}
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Coach
          <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
          </div>
      )
    },
    cell: ({ row }) => {
     
 
      return <div className="text-right font-bold">{ row.getValue("coach")}</div>
    },
    
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Event Name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Event</DropdownMenuItem>
            <DropdownMenuItem>View Coach details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
