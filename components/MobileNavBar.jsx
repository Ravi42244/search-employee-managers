import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
  

const MobileNavBar = () => {
  return (
    <Sheet>
    <SheetTrigger><div className="p-2 text-indigo-700"><Menu/></div></SheetTrigger>
    <SheetContent>
        <div className="w-full flex  flex-col h-screen items-center justify-center -mt-20 space-y-10">
        <SheetHeader>

        <SheetTitle><Link href="/">Home</Link></SheetTitle>
        <SheetTitle><Button className="bg-transparent text-black text-xl" >Demo</Button></SheetTitle>
        <SheetTitle><Link href="/about-us">About Us</Link></SheetTitle>

      </SheetHeader>
        </div>
  
    </SheetContent>
  </Sheet>
  
  )
}

export default MobileNavBar