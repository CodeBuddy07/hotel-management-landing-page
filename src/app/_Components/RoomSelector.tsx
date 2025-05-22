'use client';

import { BedDouble, Tv, Wifi, Bath, User, House, Maximize2, AirVent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const roomData = [
    {
        type: "Twin Room",
        beds: "2 single beds",
        size: "1,200 sq ft",
        price: "$282",
        breakfast: true,
        roomsLeft: 4,
    },
    {
        type: "Deluxe Double Room",
        beds: "2 single beds",
        size: "1,200 sq ft",
        price: "$282",
        breakfast: true,
        roomsLeft: 4,
    },
    {
        type: "Deluxe Double Room",
        beds: "2 single beds",
        size: "1,200 sq ft",
        price: "$282",
        breakfast: true,
        roomsLeft: 4,
    },
];

export default function RoomTable() {
    const [selectedRooms, setSelectedRooms] = useState<number[]>(
        new Array(roomData.length).fill(0)
    );

    return (
        <div className="p-6 overflow-x-auto">
            <table className="container mx-auto border border-gray-300 px-5">
                <thead>
                    <tr className="bg-blue-500 text-white text-left text-sm">
                        <th className="px-4 py-2">Room type</th>
                        <th className="px-4 py-2">Number of guests</th>
                        <th className="px-4 py-2">Price for 1 week</th>
                        <th className="px-4 py-2">Your choices</th>
                        <th className="px-4 py-2">Select rooms</th>
                        <th className="px-4 py-2">Reserve</th>
                    </tr>
                </thead>
                <tbody>
                    {roomData.map((room, index) => (
                        <tr key={index} className="border-t border-gray-300 text-sm ">
                            <td className="px-4 py-4 space-y-1 text-blue-600 border-r ">
                                <div className="font-medium"> {room.type}</div>
                                <div className="flex items-center gap-1 text-gray-500">
                                    <BedDouble className="w-4 h-4" /> {room.beds}
                                </div>
                                <div className="text-gray-500 flex items-center gap-1"><House className="w-4 h-4" />Room <Maximize2 className="w-4 h-4" /> {room.size}</div>
                                <div className="flex gap-2 text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <AirVent className="w-4 h-4" />
                                        <span className="text-gray-500">Air conditioning</span>
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Bath className="w-4 h-4" />
                                        <span className="text-gray-500">Bathroom</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Tv className="w-4 h-4" />
                                        <span className="text-gray-500">TV</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Wifi className="w-4 h-4" />
                                        <span className="text-gray-500">WiFi</span>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-4 border-r">
                                <div className="flex gap-1 text-gray-700">
                                    <User className="w-5 h-5" />
                                    <User className="w-5 h-5" />
                                </div>
                            </td>
                            <td className="px-4 py-4 font-bold text-lg border-r">{room.price}</td>
                            <td className="px-4 py-4  border-r">
                                <div>Breakfast included</div>
                                <div className="text-red-600">Only {room.roomsLeft} rooms left</div>
                            </td>
                            <td className="px-4 py-4 border-r">
                                <select
                                    className="border rounded-full p-1 w-10"
                                    value={selectedRooms[index]}
                                    onChange={(e) => {
                                        const updated = [...selectedRooms];
                                        updated[index] = parseInt(e.target.value);
                                        setSelectedRooms(updated);
                                    }}
                                >
                                    {[0, 1, 2, 3, 4].map((val) => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td className="px-4 py-4">
                                <Button className=" bg-blue-500 hover:bg-blue-600 rounded-full px-8">Reserve</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
