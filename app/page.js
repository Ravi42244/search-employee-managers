"use client"
import CardDisplay from "@/components/CardDisplay";
import InputForm from "@/components/Form";
import { useEffect, useState } from "react";



export default function Home() {

  const [BACKEND_URL, setBACKEND_URL] = useState(process.env.NEXT_PUBLIC_BACKEND_URL)
  const [empData, setEmpData]= useState()
const result = (data) => {setEmpData(data)}

useEffect(()=>{

},[empData])


  return (
  
  <div className="w-full min-h-screen  flex items-center justify-center bg-gradient-to-br from-indigo-600 ">
   <div className="w-full flex-cols items-center justify-center    "> 
 
<div className="space-y-5  grid grid-rows-2 "  >

<div className=" w-full flex items-center justify-center">

    <InputForm BACKEND_URL={BACKEND_URL} result={result} />
</div>
  {empData  ?<> <div className="hidden md:flex items-center justify-center ">
    <CardDisplay empData={empData}/>
</div>
<div>
  Searched
</div>

</> : <div className="w-full text-center flex items-center justify-center -mt-24 text-xl "><div className="w-1/2 space-y-5 scroll-mt-60  transition ease-in-out delay-150  duration-300" id="Note_section">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-600 via-indigo-600/50 to-indigo-300  md:text-4xl text-2xl font-bold underline underline-offset-1">NOTE</span>
  <p className="md:text-lg text-indigo-700 text-xs ">The initial search process may take longer than expected as the server is operating on a free tier account.</p>
</div></div>}

</div>
</div>
    
    
    </div>
  
  );
}
