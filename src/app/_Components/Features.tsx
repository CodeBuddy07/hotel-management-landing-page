"use client"

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Utensils, Wind, Dumbbell, Waves, MessageSquareDot, House, LandPlot } from "lucide-react";

const Features = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full container mx-auto p-4">
      <div className="pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex justify-start bg-transparent p-0 space-x-8">
            {["overview", "features", "reviews"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`relative pr-5 pl-1 py-3 h-full bg-transparent after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out after:w-0 data-[state=active]:after:w-7 data-[state=active]:shadow-none text-sm font-medium rounded-none
                            ${activeTab === tab
                    ? "text-blue-500"
                    : "text-gray-600"
                  }`
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}

            <div className="ml-auto">
              <Button className="bg-blue-500 hover:bg-blue-600 rounded-full px-6">
                <MessageSquareDot size={30} />
                Message
              </Button>
            </div>
          </TabsList>


          <div className="flex justify-between items-center ">
            <div className="mt-6">
              <TabsContent value="overview" className="mt-0 p-0">
                <PropertyDetails />
              </TabsContent>
              <TabsContent value="features" className="mt-0 p-0">
                <PropertyFeatures />
              </TabsContent>
              <TabsContent value="reviews" className="mt-0 p-0">
                <div className="flex flex-col items-center justify-center text-center  rounded-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold text-gray-500">No Reviews Yet</h3>
                  <p className="text-gray-500 mt-2 max-w-md">
                    Once someone shares their experience, you&apos;ll see their review here. Be the first to leave a mark!
                  </p>
                  
                </div>
              </TabsContent>

            </div>

            <div className="w-full md:w-1/3 grid place-items-center ">
              <Card className="border rounded-lg shadow-sm">
                <CardContent className="p-6 px-10">
                  <div className="mb-6">
                    <p className="text-gray-700">1 week, 2 adults, 1 child</p>
                    <h2 className="text-2xl font-bold mt-2">USD $6,112</h2>
                  </div>
                  <Button className="bg-blue-500 hover:bg-blue-600 rounded-full w-max px-7">
                    Reserve
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </Tabs>
      </div>


    </div >
  );
};

const PropertyDetails = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Property Type</h2>
      <div className="flex gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="border rounded-sm p-2">
            <House size={20} />
          </div>
          <span>Resorts</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="border rounded-sm p-2">
            <LandPlot size={20} />
          </div>
          <span>12000 sqft</span>
        </div>
      </div>
    </div>
  );
};

const PropertyFeatures = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <div className="flex flex-wrap gap-3 mb-8 max-w-md">
        <div className="flex items-center gap-2 p-2">
          <div className="border rounded-sm p-2">
            <Wifi size={20} />
          </div>
          <span>WiFi</span>
        </div>
        <div className="flex items-center gap-2 p-2">
          <div className="border rounded-sm p-2">
            <Utensils size={20} />
          </div>
          <span>Dining</span>
        </div>
        <div className="flex items-center gap-2 p-2 ">
          <div className="border rounded-sm p-2">
            <Waves size={20} />
          </div>

          <span>Swimming Pool</span>
        </div>
        <div className="flex items-center gap-2 p-2 ">
          <div className="border rounded-sm p-2">
            <Wind size={20} />
          </div>
          <span>Air Conditioning</span>
        </div>
        <div className="flex items-center gap-2 p-2 ">
          <div className="border rounded-sm p-2">
            <Dumbbell size={20} />
          </div>
          <span>Gym</span>
        </div>
      </div>
    </div>
  );
};

export default Features;