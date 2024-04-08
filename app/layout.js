"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster"
// import { Toaster as Sonner_Toaster } from "@/components/ui/sonner"
import MobileNavBar from "@/components/MobileNavBar";
import { ArrowUp } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className=" relative w-full h-screen">
<div className="hidden md:flex  md:fixed md:top-0 md:w-full md:justify-center md:mt-5 z-50">

        <NavBar />
        
</div>
<div className=" md:hidden fixed   w-full flex items-center justify-end px-2 ">
  <div className=" opacity-65  m-2 rounded flex items-center justify-center">
<MobileNavBar className="" />
 </div>
</div>
<div className="w-full">

        {children}
</div>
<div className="fixed bottom-5 m-2 right-3 scroll-smooth cursor-pointer rounded-full bg-indigo-200 opacity-65 flex items-end  p-1 scale-[125%] "  onClick={()=>{
window.scrollTo({top:0,left:0,behavior:"smooth"})

}}><ArrowUp className="animate-bounce "/></div>
        </div>
        <Toaster />
        {/* <Sonner_Toaster /> */}
        </body>
    </html>
  );
}
