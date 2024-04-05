import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster"
import MobileNavBar from "@/components/MobileNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Search Employee Project",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className=" relative w-full h-screen">
<div className="hidden md:flex  md:fixed md:top-0 md:w-full md:justify-center md:mt-5 z-50">

        <NavBar />
        
</div>
<div className=" md:hidden absolute w-full flex items-center justify-end px-2 ">
<MobileNavBar />
</div>
<div>

        {children}
</div>
        </div>
        <Toaster />
        </body>
    </html>
  );
}
