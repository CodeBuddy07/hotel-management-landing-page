"use client";

import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HomeIcon, Minus, Plus } from "lucide-react";

export function RoomGuestSelector() {
  const [open, setOpen] = React.useState(false);
  const [adults, setAdults] = React.useState(2);
  const [children, setChildren] = React.useState(0);
  const [rooms, setRooms] = React.useState(1);

  const handleChange = (type: "adults" | "children" | "rooms", value: number) => {
    if (value < 0) return;
    if (type === "adults") setAdults(value);
    if (type === "children") setChildren(value);
    if (type === "rooms") setRooms(value);
  };

  const label = `${adults} Adults – ${children} Children – ${rooms} Room${rooms > 1 ? "s" : ""}`;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="lg:w-[250px] justify-start rounded-full px-4 py-2 bg-gray-100 text-sm"
        >
          <HomeIcon className="mr-2 h-4 w-4 text-blue-500" />
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-[280px] w-full space-y-4">
        {[
          { label: "Adults", value: adults, onChange: (val: number) => handleChange("adults", val) },
          { label: "Children", value: children, onChange: (val: number) => handleChange("children", val) },
          { label: "Rooms", value: rooms, onChange: (val: number) => handleChange("rooms", val) },
        ].map(({ label, value, onChange }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-sm">{label}</span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 p-0"
                onClick={() => onChange(value - 1)}
                disabled={value === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-5 text-center text-sm">{value}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-6 w-6 p-0"
                onClick={() => onChange(value + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
