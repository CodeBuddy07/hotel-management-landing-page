"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RoomGuestSelector } from "./RoomGuestSelector";

export function AvailabilityForm() {
  const [checkIn, setCheckIn] = React.useState<Date>(() => new Date());
  const [checkOut, setCheckOut] = React.useState<Date>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });


  const formattedDate = (date: Date | undefined) =>
    date ? format(date, "EEE, dd MMMM yyyy") : "Select Date";

  return (
    <div className="w-full container mx-auto px-5">
      <div className="  w-full max-w-5xl space-y-4">
        <h2 className="text-lg font-semibold">Availability</h2>
        <div className="flex flex-col lg:flex-row items-center gap-4 border border-blue-100 px-4 py-6 rounded-xl">
          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-muted-foreground">Check–In</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className=" w-full justify-start text-left rounded-full px-4 bg-gray-100"
                >
                  <div className="p-1 rounded-full bg-blue-500 text-white text-center">
                    <CalendarIcon className=" h-4 w-4 " />
                  </div>
                  {formattedDate(checkIn)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  disabled={(date) => date < checkIn}
                  selected={checkIn}
                  onSelect={(date) => {
                    if (date) setCheckIn(date);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-muted-foreground">Check–Out</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className=" w-full justify-start text-left rounded-full px-4 bg-gray-100"
                >
                  <div className="p-1 rounded-full bg-blue-500 text-white text-center">
                    <CalendarIcon className=" h-4 w-4 " />
                  </div>
                  {formattedDate(checkOut)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  disabled={(date) => date < checkIn}
                  selected={checkOut}
                  onSelect={(date) => {
                    if (date) setCheckOut(date);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-1 w-full">
            <span className="text-sm font-medium text-muted-foreground">Room & Guest</span>
            <RoomGuestSelector />
          </div>

          <div className="ml-auto mt-5 ">
            <Button className="bg-blue-500 w-full hover:bg-blue-600 text-white rounded-full px-6">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



