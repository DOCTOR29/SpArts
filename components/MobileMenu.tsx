import {
    Banknote,
    BarChartBig,
    CalendarClock,
    Cloud,
    CreditCard,
    FileQuestion,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    LucideUserCheck2,
    Mail,
    Menu,
    MessageSquare,
    Plus,
    PlusCircle,
    School2Icon,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

function MobileMenu() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Menu <Menu className="ml-2" /> </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Menu</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <BarChartBig className="mr-2 h-4 w-4" />
          <span>Dashboard</span>
          {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <School2Icon className="mr-2 h-4 w-4" />
          <span>Academy Management</span>
          {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users className="mr-2 h-4 w-4" />
          <span>Students</span>
          {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Banknote className="mr-2 h-4 w-4" />
          <span>Fee Payment</span>
          {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <FileQuestion className="mr-2 h-4 w-4" />
          <span>Enquiries</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <LucideUserCheck2 className="mr-2 h-4 w-4" />
            <span>Coaches</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <CalendarClock className="mr-2 h-4 w-4" />
                <span>Schedule</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>
          <Plus className="mr-2 h-4 w-4" />
          <span>Schedule</span>
          {/* <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default MobileMenu