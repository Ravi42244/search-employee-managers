
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


export default function AboutUs() {
  return (
  <div className=" w-full flex text-3xl pt-64 bg-gradient-to-br  from-indigo-600 to-indigo-300 px-52 scroll-smooth scroll-my-52" >


<div className="w-full mr-5" >
  <div className="inline-block p-2 bg-yellow-300 h-fit w-full rounded-full">

  <Image width={200} className="rounded-full shadow-2xl shadow-yellow-200" height={200} src={ProfilePicture} alt="Profile Picture" />
  </div>
</div>





<div className="flex items-center  flex-col space-y-5 snap-y snap-mandatory">




<div className="w-full h-screen space-y-5 snap-center snap-always">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 text-9xl font-bold underline underline-offset-1">About Us</span>
  <div  className="text-lg text-white w-full relative inline-flex">
  <p>Hello, I am <span className="text-2xl font-bold">Ravi Shankar</span>, I bring 2 years of working experience in the field. As a software engineer, I am driven by curiosity and possess excellent problem-solving skills. I have an insatiable thirst for learning new technologies, always striving to stay up-to-date with the latest advancements. Throughout my career, I have worked on numerous interesting projects that showcase my technical expertise and passion for software engineering. If you are interested, you can explore more of my projects and professional experiences on my <div className=" flex items-end ml-1  absolute bottom-1 left-[585px]" > <Link target="_blank" href="http://www.linkedin.com/in/ravi-shankar-fullstack-developer" className="text-blue-900 font-bold text-lg "><Image width={100} height={20} src={LinkedInLogo} alt="LinkedIn Logo" /></Link> .</div>
  </p>
  </div>
  <div className="mt-20 w-full flex space-x-2  items-center justify-evenly">
  <div className="w-full">

  <a href="#contact_section" >

  <Button className=" w-full rounded-full bg-indigo-600 hover:bg-indigo-950 text-indigo-100 hover:text-white shadow">Contact me here <ArrowRightIcon/></Button>
  </a>
  </div>
  <div className="w-full">

  <a href="#Project_Details_Section" >

  <Button className=" w-full rounded-full bg-white hover:bg-indigo-950 text-indigo-800 hover:text-white shadow">Project Details </Button>
  </a>
  </div>
  <div className="w-full">

  <a href="#Tech_Stack_Section" >

  <Button className=" w-full rounded-full bg-indigo-600 hover:bg-indigo-950 text-indigo-100 hover:text-white shadow">TechStack </Button>
  </a>
  </div>
  </div>
</div>


<div className="w-full h-screen space-y-5 snap-center snap-always scroll-mt-60 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1   duration-300" id="Project_Details_Section">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 text-9xl font-bold underline underline-offset-1">Project Overview</span>
  <p className="text-lg text-white ">Our current project focuses on simplifying the process of accessing employee details based on their work email. By providing us with their work email, users can effortlessly retrieve comprehensive employee information, including their reporting structure, beautifully illustrated on a map. For those who would like to explore the functionalities of the website before using their own email, we provide a demo email address for testing.</p>
</div>


<div className="w-full h-screen space-y-5 snap-center snap-always scroll-mt-60 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1   duration-300" id="Tech_Stack_Section">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 text-9xl font-bold underline underline-offset-1">Tech Stack</span>
  <p className="text-lg text-white ">In this project, we have leveraged a powerful tech stack to ensure optimal performance and user experience. On the frontend side, I have utilized NEXT.Js as the framework, complemented by Tailwind CSS and a UI library for visually appealing and responsive designs. We have also integrated Axios for seamless API calling and Zod for robust input validation.

For the backend, our choice of technologies includes Node.Js and Express.Js to handle server-side operations efficiently. We have utilized MongoDB as our preferred database to ensure scalability and flexibility.</p>
</div>


<div className="w-full h-screen space-y-5 snap-center snap-always scroll-mt-80 hover:scale-125 transition ease-in-out delay-150 hover:-translate-y-1   duration-300" id="contact_section">
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-indigo-300 text-9xl font-bold underline underline-offset-1">Contact</span>
  <p className="text-lg text-white ">To get in touch, you can reach me via email at ravi42244@gmail.com. Please feel free to reach out for any further inquiries, collaborations, or discussions. Your feedback and ideas are always welcome.</p>
</div>





</div>





  </div>
  );
}
