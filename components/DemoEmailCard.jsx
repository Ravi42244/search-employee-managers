import { CheckCircle, ClipboardCopy } from "lucide-react";
import copy from "copy-to-clipboard";
import React from "react";
import { toast } from "./ui/use-toast";

const DemoEmailCard = ({ email }) => {
  return (
    <div className="w-full border h-8 rounded-lg  bg-indigo-100 flex items-center justify-between px-1 my-2 md:my-5 text-indigo-900 ">
      <div className="w-1/2 text-xs object-contain  ">
        {email?.slice(0, 20)}...
      </div>
      <div
        onClick={async () => {
          if (navigator.clipboard) {
            await navigator?.clipboard?.writeText(email);
          } else {
            copy(email);
          }
          toast({
            title: (
              <div className="flex space-x-1">
                <div className="text-emerald-700">
                  <CheckCircle />
                </div>{" "}
                <div>{` Copied: ${email}`}</div>
              </div>
            ),
          });
        }}
        className="scale-75 cursor-pointer p-1 transition ease-in-out delay-75 rounded-lg hover:bg-indigo-300 duration-300"
      >
        <ClipboardCopy className="text-indigo-600 scale-75 transition ease-in-out delay-75 hover:text-indigo-900 duration-300" />
      </div>
    </div>
  );
};

export default DemoEmailCard;
