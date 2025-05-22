"use client";

import {
    MountainSnow,
    ShoppingBag,
    TrainFront,
    Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PropertyDetails() {
    return (
        <div className="p-6 space-y-8 container mx-auto px-3">
            
            <section>
                <h2 className="text-xl font-semibold mb-2">About this property</h2>
                <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">
                    The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious
                    and spacious experience tailored for both business and leisure
                    travelers. With its modern design and panoramic views of the
                    Mediterranean Sea, the suite combines comfort, elegance, and
                    functionality.
                </p>
            </section>

            
            <section>
                <h2 className="text-xl font-semibold mb-4">Explore the Area</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    
                    <div className="grid grid-cols-2 gap-6 text-sm">
                        
                        <div>
                            <div className="flex items-center font-medium gap-2 mb-2">
                                <Utensils className="w-4 h-4 text-muted-foreground" />
                                Restaurants & Cafes
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4 text-muted-foreground">
                                <div>
                                    <p>Blue Cafe</p>
                                    <p>Blue Cafe</p>
                                    <p>Blue Cafe</p>
                                </div>
                                <div>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center font-medium gap-2 mb-2">
                                <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                                Shops & Markets
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4 text-muted-foreground">
                                <div>
                                    <p>Central Mall </p>
                                    <p>Central Mall </p>
                                    <p>Central Mall </p>
                                </div>
                                <div>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center font-medium gap-2 mb-2">
                                <MountainSnow className="w-4 h-4 text-muted-foreground" />
                                Beaches
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4 text-muted-foreground">
                                <div>
                                    <p>Les Dunes Beach</p>
                                    <p>Les Dunes Beach</p>
                                    <p>Les Dunes Beach</p>
                                </div>
                                <div>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                </div>
                            </div>
                            
                        </div>

                        <div>
                            <div className="flex items-center font-medium gap-2 mb-2">
                                <TrainFront className="w-4 h-4 text-muted-foreground" />
                                Public transport
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4 text-muted-foreground">
                                <div>
                                    <p>Train - Riverdale Station</p>
                                    <p>Metro – Cityline Hub</p>
                                    <p>Metro – Cityline Hub</p>
                                </div>
                                <div>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                    <p>1.4 km</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="rounded-xl overflow-hidden border bg-white shadow-sm">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3651.5036398589705!2d90.42383057613229!3d23.76507345846007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1747912536089!5m2!1sen!2sbd" width="1000" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="p-4 border-t text-center">
                            <Button variant="outline" className="border-none hover:bg-white shadow-none text-blue-500 font-semibold">Explore the Area</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
