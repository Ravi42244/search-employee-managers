"use client"
import { CheckCircle, ClipboardCopy, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "./ui/badge";
import { toast } from "./ui/use-toast";
import DemoEmailCard from "./DemoEmailCard";
import { demoEmail } from "@/CONSTANTS";

const NavBar = () => {
  return (
    <nav className="w-auto rounded-full bg-white  text-indigo-500  h-12  grid grid-cols-3 gap-5 p-2 pr-10 px-10 z-50">
      <div className="  p-2 rounded-full flex    items-center justify-center cursor-pointer  transition ease-in-out delay-150   hover:underline hover:underline-offset-2 duration-300">
        <Link href="/">Home</Link>
      </div>

      <div className="  p-2 rounded-full  flex items-center justify-center cursor-pointer  transition ease-in-out delay-150   hover:underline hover:underline-offset-2 duration-300 ">
        <HoverCard>
          <HoverCardTrigger >For Demo</HoverCardTrigger>
          <HoverCardContent className="cursor-default">
            {demoEmail?.map((email,index) => (
              <DemoEmailCard  email={email} key={index}/>
            ))}
          </HoverCardContent>
        </HoverCard>
      </div>
      <div className=" p-2 rounded-full   flex items-center justify-center cursor-pointer transition ease-in-out delay-150   hover:underline hover:underline-offset-2 duration-300">
        <Link href="/about-us">About Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
