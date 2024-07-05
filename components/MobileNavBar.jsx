import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import MobileDemoUserEmail from "./MobileDemoUserEmail";

const MobileNavBar = () => {
  return (
    <Sheet className="">
      <SheetTrigger>
        <div className="p-2 text-indigo-700">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="bg-indigo-500 bg-opacity-45 text-white border-0">
        <div className="w-full flex  flex-col h-screen items-center justify-center -mt-20 space-y-10">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="text-white">
                Home
              </Link>
            </SheetTitle>
            <SheetTitle>
              <Button className="bg-transparent text-white active:bg-indigo-500 active:text-indigo-100 text-xl">
                <MobileDemoUserEmail />
              </Button>
            </SheetTitle>
            <SheetTitle>
              <Link className="text-white" href="/about-us">
                About Us
              </Link>
            </SheetTitle>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
