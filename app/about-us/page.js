 "use client"
import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import ProfilePicture from "../../public/Ravi_Shankar.jpg"
import LinkedInLogo from "../../public/linkedInLogo.png"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";


export default function AboutUs() {
const [showMore, setShowMore] = useState(false)
  return (
  <div className=" min-w-full   md:flex md:text-3xl md:pt-[7rem] bg-gradient-to-br  from-indigo-600 to-indigo-300 md:px-52 scroll-smooth md:scroll-my-52" >


<div className="md:w-full  md:mr-14 flex flex-col items-center w-full justify-center md:flex-row md:items-start" >
  <div className=" md:inline-block w-fit scale-75 md:scale-125 md:p-2 bg-yellow-300 md:h-fit md:w-full rounded-full">

  <Image width={200} className="rounded-full shadow-2xl shadow-yellow-200" height={200} src={ProfilePicture} alt="Profile Picture" />
  </div>
</div>





<div className="flex min-h-screen  items-center justify-center text-center md:text-left flex-col space-y-5 snap-y snap-mandatory">




<div className="w-full h-screen md:space-y-5 space-y-2   snap-center snap-always ">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 md:text-9xl text-6xl font-bold underline underline-offset-1">About Us</span>
  <div  className="text-lg p-5 text-white w-full relative inline-flex">
  <p>Hello, I am <span className="text-2xl font-bold">Ravi Shankar</span>, I bring 2 years of working experience in the field. As a software engineer, I am driven by curiosity and possess excellent problem-solving skills.<Button className={cn("bg-transparent rounded-full mx-2 px-2  cursor-pointer  border-0 hover:bg-indigo-300 hover:text-indigo-900 text-indigo-100 inline",showMore && "hidden")} onClick={()=>{
setShowMore((prev)=>!prev)
  }}>Show More...</Button><span className={cn("hidden",showMore && "inline")}> I have an insatiable thirst for learning new technologies, always striving to stay up-to-date with the latest advancements.Throughout my career, I have worked on numerous interesting projects that showcase my technical expertise and passion for software engineering. If you are interested, you can explore more of my projects and professional experiences on my.</span><Button  className={cn("bg-transparent rounded-full border-0  mx-2 px-2 hover:bg-indigo-300  cursor-pointer hidden text-indigo-100 hover:text-indigo-900",showMore && "inline")} onClick={()=>{
    setShowMore((prev)=>!prev)
      }}>Show Less</Button>
  {/* <div className=" flex items-end ml-1  absolute bottom-1 " > <Link target="_blank" href="http://www.linkedin.com/in/ravi-shankar-fullstack-developer" className="text-blue-900 font-bold text-lg "><Image width={100} height={20} src={LinkedInLogo} alt="LinkedIn Logo" /></Link> .</div> */}
  </p>
  </div>
  <div className="md:mt-20 px-2 w-full md:flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 md:w-full  md:items-center md:justify-evenly">
 
  <div className="w-full ">

  <a href="#Project_Details_Section" >

  <Button className=" w-full rounded-full  bg-indigo-600 text-indigo-100  hover:bg-indigo-950  hover:text-white shadow">Project Details </Button>
  </a>
  </div>
  <div className="w-full">

  <a href="#Tech_Stack_Section" >

  <Button className=" w-full rounded-full hover:bg-indigo-950 bg-white text-indigo-800 hover:text-white shadow">TechStack </Button>
  </a>
  </div>
  <div className="w-full">

<a href="#contact_section" >

<Button className=" w-full rounded-full bg-indigo-600 hover:bg-indigo-950 text-indigo-100 hover:text-white shadow">Contact me here <ArrowRightIcon/></Button>
</a>
</div>
  </div>
</div>


<div className="w-full h-screen space-y-5 p-5 snap-center snap-always md:scroll-mt-[5rem] scroll-mt-[5rem] md:hover:scale-125 transition ease-in-out delay-150 md:hover:-translate-y-1   duration-300" id="Project_Details_Section">
  <span className=" bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 md:text-9xl text-6xl font-bold underline underline-offset-1">Project Overview</span>
  <p className=" text-lg text-white ">Our current project focuses on simplifying the process of accessing employee details based on their work email. By providing us with their work email, users can effortlessly retrieve comprehensive employee information, including their reporting structure, beautifully illustrated on a map. For those who would like to explore the functionalities of the website before using their own email, we provide a demo email address for testing.</p>
</div>


<div className="w-full h-screen flex items-center space-y-5 p-5 snap-center snap-always md:scroll-mt-[1rem] scroll-mt-[-1rem] md:hover:scale-125 transition ease-in-out delay-150 md:hover:-translate-y-1   duration-300" id="Tech_Stack_Section">
 <div className="">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 md:text-9xl text-6xl font-bold underline underline-offset-1">Tech Stack</span>
  <p className="text-lg text-white ">In this project, we have leveraged a powerful tech stack to ensure optimal performance and user experience. On the frontend side, I have utilized NEXT.Js as the framework, complemented by Tailwind CSS and a UI library for visually appealing and responsive designs. We have also integrated Axios for seamless API calling and Zod for robust input validation.

For the backend, our choice of technologies includes Node.Js and Express.Js to handle server-side operations efficiently. We have utilized MongoDB as our preferred database to ensure scalability and flexibility.</p>
</div>
</div>


<div className="w-full flex items-center h-screen mb-96 space-y-10 snap-start snap-always " id="contact_section">
  <div className=" md:hover:scale-125 md:h-1/2 transition ease-in-out delay-150 md:hover:translate-y-3  duration-300">

  <span className="bg-clip-text text-transparent p-5 bg-gradient-to-b from-white to-indigo-300 md:text-9xl text-6xl font-bold underline underline-offset-1">Contact</span>
  <p className="text-lg text-white  ">To get in touch, you can reach me via email at ravi42244@gmail.com. Please feel free to reach out for any further inquiries.</p>
  </div>
</div>





</div>





  </div>
  );
}
