
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from './ui/badge'
import { CheckCircle, ClipboardCopy } from 'lucide-react'
import { toast } from './ui/use-toast'

const EmpCard = ({firstName, lastName, workEmail,role}) => {



 
  return (
    <Card className="w-[250px] md:w-[350px] text-indigo-800 bg-gradient-to-t from-indigo-50">
    <CardHeader>
      <CardTitle>{<div className='flex items-center text-sm md:text-base justify-between'><div>{`${firstName} ${lastName}`}</div><div className='group scale-50 cursor-pointer ' onClick={async()=>{
 await navigator?.clipboard.writeText(workEmail);
 toast({
  title: (
    <div className="flex space-x-1">
      <div className="text-emerald-700">
        <CheckCircle />
      </div>{" "}
      <div>{` Copied: ${workEmail}`}</div>
    </div>
  ),
});
      }}><Badge variant="outline" className="group-hover:bg-neutral-200 transition duration-300 ease-in-out text-indigo-700"><ClipboardCopy/></Badge></div></div>}</CardTitle>
      <CardDescription className="text-xs">{workEmail}</CardDescription>
      <CardDescription className="text-xs">{role}</CardDescription>
    </CardHeader>
  </Card>
  )
}

export default EmpCard