import React from 'react';
import { Twitter, Facebook, Instagram, Github, MapPin, Phone, Mail, Smartphone, Apple } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#00548C] text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo_white.png"
                                alt="Logo"
                                width={100}
                                height={100}
                                className="h-8 w-auto"
                            />
                        </Link>

                        <p className="text-blue-100 leading-relaxed max-w-md">
                            [App Name] makes booking your next stay easy, affordable, and stress-free.
                            With thousands of hotels worldwide, exclusive deals, and secure payment
                            options, we&apos;re here to help you find the perfect place to stay, every time.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-blue-200 mt-0.5 flex-shrink-0" />
                            <span className="text-blue-100">123 Travel St, Suite 100, City, Country</span>
                        </div>
                    </div>


                    <div className="space-y-6">
                        <nav className="space-y-4">
                            <a href="#" className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                                Home
                            </a>
                            <a href="#" className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                                Hotels
                            </a>
                            <a href="#" className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                                Deals
                            </a>
                            <a href="#" className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                                About Us
                            </a>
                            <a href="#" className="block text-white hover:text-blue-200 transition-colors duration-200 font-medium">
                                Contact Us
                            </a>
                        </nav>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-200" />
                                <span className="text-white">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-200" />
                                <span className="text-white">support@[yourappname].com</span>
                            </div>
                        </div>

                        <div className="space-y-4 mt-10">
                            <h3 className="text-white font-semibold text-lg">Download Our App</h3>

                            <div className="flex space-x-3">
                                <a href="#" className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors duration-200">
                                    <Smartphone className="w-6 h-6" />
                                </a>

                                {/* iOS */}
                                <a href="#" className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors duration-200">
                                    <Apple className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className=" mt-12 pt-8">
                            <div className="text-right">
                                <p className="text-blue-200 text-sm">
                                    © 2023, All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
};

export default Footer;