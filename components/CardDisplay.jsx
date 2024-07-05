"use client";
import React, { useEffect } from "react";
import EmpCard from "./EmpCard";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const CardDisplay = ({ empData }) => {
  useEffect(() => {}, [empData]);
  return (
    <div className="w-full flex items-start justify-center p-5 ">
      <div className="flex  justify-start items-center">
        <ScrollArea className="w-[1200px] px-5 py-2 h-[335px] whitespace-nowrap rounded-3xl bg-neutral-100  shadow-2xl  ">
          {empData.error_message ? (
            <div className="w-full flex items-center justify-center h-56 ">
              No Account With
              <span className=" mx-2 font-bold text-lg">
                {JSON.stringify(empData.email)}
              </span>{" "}
              Work Email
              <span className="text-red-500 text-3xl font-bold mx-1">!</span>
            </div>
          ) : (
            <div className="w-full grid grid-rows-2">
              <div className="">
                <div className="grid grid-flow-col gap-x-5 ">
                  {empData?.reportTo &&
                    empData?.reportTo.map((data, index) => (
                      <>
                        {index === 0 ? (
                          <div className="w-[350px] ">
                            <EmpCard
                              firstName={data?.firstName}
                              lastName={data?.lastName}
                              role={data.role}
                              workEmail={data?.email}
                              className="shadow-md"
                            />
                            <div
                              className={cn(
                                "w-[200px] ml-[175px] flex items-end justify-start border-b font-thin",
                                empData?.reportTo?.length < 3 && "w-[405px]"
                              )}
                            >
                              |
                            </div>
                          </div>
                        ) : index === empData?.reportTo?.length - 1 ? (
                          <div
                            className={cn(
                              "w-[350px]",
                              empData?.reportTo?.length < 3 && "  ml-[440px]"
                            )}
                          >
                            <EmpCard
                              className="shadow-md"
                              firstName={data?.firstName}
                              lastName={data?.lastName}
                              role={data.role}
                              workEmail={data?.email}
                            />
                            <div
                              className={cn(
                                "w-[175px] mr-[175px] flex items-end justify-end border-b font-thin",
                                empData?.reportTo?.length < 3 &&
                                  "w-[418px] -ml-[225px]"
                              )}
                            >
                              |
                            </div>
                          </div>
                        ) : (
                          <div className="w-[350px] ">
                            <EmpCard
                              className="shadow-md"
                              firstName={data?.firstName}
                              lastName={data?.lastName}
                              role={data.role}
                              workEmail={data?.email}
                            />
                            <div
                              className={cn(
                                "w-[380px] pr-7 flex items-end justify-center border-b font-thin",
                                empData?.reportTo?.length === 3 && "ml-[10px]"
                              )}
                            >
                              |
                            </div>
                          </div>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div className="">
                <div
                  className={cn(
                    " flex flex-col items-center justify-center ",
                    !empData?.reportTo && "-mt-14"
                  )}
                >
                  {!empData?.reportTo && (
                    <div className="bg-white border rounded-md  p-2">
                      {empData?.firstName} {empData?.lastName}
                      <span className="font-bold">
                        {" "}
                        operates independently without reporting to anyone.
                      </span>
                    </div>
                  )}
                  <div className="w-[925px]  flex items-end justify-center font-thin">
                    |
                  </div>
                  <EmpCard
                    className="shadow-md"
                    firstName={empData?.firstName}
                    role={empData?.role}
                    lastName={empData?.lastName}
                    workEmail={empData?.email}
                  />
                </div>
              </div>
            </div>
          )}

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default CardDisplay;
