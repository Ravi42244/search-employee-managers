import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import React from "react";
import DemoEmailCard from "./DemoEmailCard";
import { demoEmail } from "@/CONSTANTS";

const MobileDemoUserEmail = () => {
  return (
    <Dialog>
      <DialogTrigger>Demo Email</DialogTrigger>
      <DialogContent className="bg-indigo-500 bg-opacity-45 border-0 rounded-3xl text-white ">
        {demoEmail?.map((email, index) => (
          <DemoEmailCard email={email} key={index} />
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default MobileDemoUserEmail;
