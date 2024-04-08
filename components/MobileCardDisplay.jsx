"use client"
import React from "react";
import { ChevronsUpDown, Plus, X } from "lucide-react"
import EmpCard from "./EmpCard";
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Badge } from './ui/badge'
import { CheckCircle, ClipboardCopy } from 'lucide-react'
import { toast } from './ui/use-toast'
  
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import copy from "copy-to-clipboard";

const MobileCardDisplay = ({ empData }) => {
    const [isOpen, setIsOpen] = React.useState(false)
 
  return (
    <div className={cn(" w-full flex items-center justify-center py-5 ",isOpen && "-mt-28")}>
      <div className=" flex  justify-start items-center ">
       
          {empData.error_message ? (
            <div className="  text-xs  md:text-base md:text-wrap flex md:flex-row flex-col items-center bg-neutral-100 rounded-3xl justify-center p-3  ">
              No Account With
              <span className=" mx-2 font-bold text-base">
                {JSON.stringify(empData.email)}
              </span>{" "}
              Work Email
              <span className="text-red-500 text-3xl font-bold mx-1">!</span>
            </div>
          ) :
          <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">
            <Card className="px-2 py-1 mx-1  ">
            <div className="w-full flex items-center justify-between">

            <div className="">

                <CardTitle className="text-base mb-1">{empData?.firstName} {empData?.lastName}</CardTitle>
                <CardDescription className="text-xs">{empData?.email}</CardDescription>
                <CardDescription className="text-xs">{empData?.role}</CardDescription>
            </div>
            <div>
            <div className='group scale-50 cursor-pointer ' onClick={async()=>{
  
    if(navigator.clipboard){

      await navigator?.clipboard?.writeText(empData?.reportTo[0]?.email);
    }else{
      copy(empData?.email)
    }
    toast({
      title: (
        <div className="flex space-x-1">
          <div className="text-emerald-700">
            <CheckCircle />
          </div>{" "}
          <div>{` Copied: ${empData?.email}`}</div>
        </div>
      ),
    });
        }}><Badge variant="outline" className="group-hover:bg-neutral-200 transition duration-300 ease-in-out text-indigo-700"><ClipboardCopy/></Badge></div>
            </div>
           
            </div>
              </Card>
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          {
!empData?.reportTo ? <div className='bg-white border rounded-md m-2 text-xs p-2'>{empData?.firstName} {empData?.lastName}<span className='font-bold'> operates independently without reporting to anyone.</span></div>
:
<Card className="px-2 py-1 m-2 mx-5">
<div className="w-full flex items-center justify-between">

<div>

    <CardTitle className="text-base mb-1">{empData?.reportTo[0]?.firstName} {empData?.reportTo[0]?.lastName}</CardTitle>
    <CardDescription className="text-xs">{empData?.reportTo[0]?.email}</CardDescription>
    <CardDescription className="text-xs">{empData?.reportTo[0]?.role}</CardDescription>
</div>
<div>
<div className='group scale-50 cursor-pointer ' onClick={async()=>{

if(navigator.clipboard){

await navigator?.clipboard?.writeText(empData?.reportTo[0]?.email);
}else{
copy(empData?.reportTo[0]?.email)
}
toast({
title: (
<div className="flex space-x-1">
<div className="text-emerald-700">
<CheckCircle />
</div>{" "}
<div>{` Copied: ${empData?.reportTo[0]?.email}`}</div>
</div>
),
});
}}><Badge variant="outline" className="group-hover:bg-neutral-200 transition duration-300 ease-in-out text-indigo-700"><ClipboardCopy/></Badge></div>
</div>

</div>
  </Card>



          }
        
              {
                empData?.reportTo?.length > 1 && 
          <CollapsibleContent className="space-y-2">
        {empData?.reportTo.slice(1).map((empData, index)=>(
             <Card key={empData?.email || index} className="px-2 py-1 m-2 mx-5">
             <div className="w-full flex items-center justify-between">
 
             <div>
 
                 <CardTitle className="text-base mb-1">{empData?.firstName} {empData?.lastName}</CardTitle>
                 <CardDescription className="text-xs">{empData?.email}</CardDescription>
                 <CardDescription className="text-xs">{empData?.role}</CardDescription>
             </div>
             <div>
             <div className='group scale-50 cursor-pointer ' onClick={async()=>{
   
     if(navigator.clipboard){
 
       await navigator?.clipboard?.writeText(empData?.reportTo[0]?.email);
     }else{
       copy(empData?.email)
     }
     toast({
       title: (
         <div className="flex space-x-1">
           <div className="text-emerald-700">
             <CheckCircle />
           </div>{" "}
           <div>{` Copied: ${empData?.email}`}</div>
         </div>
       ),
     });
         }}><Badge variant="outline" className="group-hover:bg-neutral-200 transition duration-300 ease-in-out text-indigo-700"><ClipboardCopy/></Badge></div>
             </div>
            
             </div>
               </Card>
        ))}
            
          </CollapsibleContent>
        }
        </Collapsible>
          }

      </div>
    </div>
  );
};

export default MobileCardDisplay;
