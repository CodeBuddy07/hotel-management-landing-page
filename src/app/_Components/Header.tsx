import Image from "next/image";
import { Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const imagePaths = [
    "/Header_IMG (2).jpg",
    "/Header_IMG (3).jpg",
    "/Header_IMG (4).jpg",
    "/Header_IMG (5).jpg",
    "/Header_IMG (6).jpg",
    "/Header_IMG (7).jpg",
    "/Header_IMG (8).jpg",
    "/Header_IMG (9).jpg",
];

const Header = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2">El Aurassi Hotel</h1>
                    <p className="text-muted-foreground mb-6 max-w-md">	
                        Spacious, modern rooms with panoramic views of the Mediterranean Sea.
                    </p>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <Bookmark size={42} className=" text-blue-500 bg-blue-100 rounded-full p-2 cursor-pointer" />
                    <Share2 size={42} className="text-blue-500 bg-blue-100 rounded-full p-2 cursor-pointer" />
                    <Button className="ml-auto rounded-full bg-blue-500 hover:bg-blue-400 px-7">Reserve →</Button>
                </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <Image
                        src="/Header_IMG (1).jpg"
                        alt="Main Room"
                        width={1200}
                        height={600}
                        className="rounded-xl object-cover w-full"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {imagePaths.slice(1, 3).map((path, idx) => (
                        <Image
                            key={idx}
                            src={path}
                            alt={`Side Image ${idx}`}
                            width={600}
                            height={300}
                            className="rounded-xl object-cover w-full h-full"
                        />
                    ))}
                </div>

                <div className="lg:col-span-3 grid grid-cols-6 gap-4">
                    {imagePaths.slice(2).map((path, idx) => (
                        <Image
                            key={idx}
                            src={path}
                            alt={`Gallery Image ${idx}`}
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[150px]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;