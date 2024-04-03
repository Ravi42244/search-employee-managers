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
  
  <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 ">
   <div className="w-full flex-cols items-center justify-center    "> 
 
<div className="h-[700px] mt-20 grid grid-rows-2 "  >

<div className=" flex items-center justify-center">

    <InputForm BACKEND_URL={BACKEND_URL} result={result} />
</div>
  {empData  ? <div className=" flex items-center justify-center ">
    <CardDisplay empData={empData} />
</div> : <div className="w-full flex items-center justify-center -mt-24 text-xl "><div className="w-1/2 space-y-5 scroll-mt-60  transition ease-in-out delay-150  duration-300" id="Note_section">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-indigo-700 via-indigo-400 to-indigo-300 text-8xl font-bold underline underline-offset-1">NOTE</span>
  <p className="text-lg text-indigo-400 ">The initial search process may take longer than expected as the server is operating on a free tier account.</p>
</div></div>}

</div>
</div>
    
    
    </div>
  
  );
}
