"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCheck, CheckCircle, ClipboardCopy, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { fetchData } from "@/utils/fetchData";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  work_email: z.string().email(),
});

const InputForm = ({ BACKEND_URL, result }) => {
  const [email, setEmail] = useState("");
  const [isSearchLoading, setisSearchLoading] = useState(false);
  const [isPasteAndSearchLoading, setisPasteAndSearchLoading] = useState(false);

  useEffect(() => {
    if (email) {
      toast({
        title: (<div className="flex w-[300px] h-5 items-center justify-between"><div>{email.slice(0,25)}...</div><div className="mr-5 scale-[200%]  text-indigo-700"> <Loader2 className="mr-2 h-4 w-4 animate-spin" /></div></div>),
      });

      fetchData(BACKEND_URL, email).then((res => {

        setisSearchLoading(false)
        setisPasteAndSearchLoading(false)
        result(res)})).catch((err)=>{
          setisSearchLoading(false)
          
        setisPasteAndSearchLoading(false)
        result({error_message:err,email})
        });
    }
  }, [email, BACKEND_URL,isSearchLoading,isPasteAndSearchLoading]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      work_email: "",
    },
  });

  function emailSubmit(data) {
    setisSearchLoading(true)
    setEmail(data.work_email);
  }

  return (
    <div className="w-full flex items-center justify-center p-5  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(emailSubmit)}
          className="w-full  flex items-center justify-center"
        >
          <div className="w-1/2 flex-col items-center justify-center space-y-5 ">
            <div className=" w-full flex justify-center text-3xl font-bold text-indigo-900">
             Search Employee
            </div>

            <div className="w-full">
              <div className=" w-full relative ">
                <FormField
                  control={form.control}
                  name="work_email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                          className="rounded-full focus-visible:ring-0 focus-visible: focus-visible:ring-offset-0"
                            type="email"
                            placeholder="Work Email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <div className="absolute scale-[100%]  top-2 right-2 flex items-center justify-center bg-white cursor-pointer hover:bg-neutral-200 rounded-md">
                  <div
                    className="scale-[50%]"
                    onClick={async () => {
                      if (email) {
                        navigator.clipboard.writeText(email);
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
                      }
                    }}
                  >
                    <ClipboardCopy className="text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-5 ">
          

              <Button
              
disabled={isPasteAndSearchLoading}
              className={cn("bg-indigo-600 hover:bg-indigo-800 w-full rounded-full", isSearchLoading && "")}
              type="submit"
              
              >
                 {isSearchLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
                
                Search
              </Button>
              <Button
disabled={isPasteAndSearchLoading}
              className={cn("hover:bg-indigo-100 hover:text-indigo-900 rounded-full","")}
              type="reset"
                variant="outline"
                onClick={() => {
                    navigator.clipboard.readText().then((copiedValue)=>{
                      setisPasteAndSearchLoading(true)
                      setEmail(copiedValue);
                     
                    })

                }}
              >
             {isPasteAndSearchLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
                Paste & Search
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InputForm;
