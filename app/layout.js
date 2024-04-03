import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Search Employee Project",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className=" relativew-full h-screen">
<div className="fixed top-0 w-full flex justify-center mt-5 z-50">

        <NavBar/>
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
