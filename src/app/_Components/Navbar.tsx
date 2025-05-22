'use client';

import 'flag-icons/css/flag-icons.min.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
    ChevronDown,
    User,
    Menu,
    DollarSign,
    Euro,
    PoundSterling,
    MessageCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar";

import {
    Button,
} from "@/components/ui/button";

import {
    Badge,
} from "@/components/ui/badge";

const languages = [
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'un', name: 'United States', flag: '🇺🇸' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
];

const currencies = [
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
];

const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/hotels', label: 'Hotels' },
    { path: '/house', label: 'House' },
    { path: '/about-us', label: 'About Us' },
    { path: '/contact-us', label: 'Contact Us' },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[1]);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const isActivePath = (path: string) => {
        if (path === '/home' && pathname === '/') return true;
        return pathname === path;
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getCurrencyIcon = (code: string) => {
        switch (code) {
            case 'USD': return <DollarSign className="h-4 w-4" />;
            case 'GBP': return <PoundSterling className="h-4 w-4" />;
            default: return <Euro className="h-4 w-4" />;
        }
    };

    const CountryFlag = ({ code, className }: { code: string, className?: string }) => {
        return (
            <span className={cn(`fi fi-${code.toLowerCase()}`, className)} />
        );
    };

    return (
        <div className={cn(
            "w-full bg-blue-50 py-4 px-6 sticky top-0 z-50 transition-all duration-300",
            isScrolled && "shadow-md"
        )}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="h-8 w-auto"
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center ml-8 space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path === '/home' ? '/' : item.path}
                                className={cn(
                                    "font-medium relative py-2 transition-colors",
                                    isActivePath(item.path)
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-600 hover:text-blue-600"
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="lg:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600 focus:outline-none">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85vw] sm:w-[385px] p-0">
                            <SheetHeader className="p-4 border-b">
                                <SheetTitle className="text-lg font-medium">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <nav className="flex flex-col space-y-3 border-b border-gray-100 pb-4">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.path}
                                            href={item.path === '/home' ? '/' : item.path}
                                            className={cn(
                                                "px-4 py-2 rounded-md font-medium transition-colors",
                                                isActivePath(item.path)
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-gray-600 hover:bg-gray-50"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="pt-4 space-y-3 border-b pb-4">


                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="w-full justify-between">
                                                <div className="flex items-center">
                                                    {getCurrencyIcon(selectedCurrency.code)}
                                                    <span className="ml-2">{selectedCurrency.name}</span>
                                                </div>
                                                <ChevronDown className="h-4 w-4 ml-2" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[200px]">
                                            {currencies.map((currency) => (
                                                <DropdownMenuItem
                                                    key={currency.code}
                                                    className={cn(
                                                        "cursor-pointer",
                                                        selectedCurrency.code === currency.code && "bg-blue-50 text-blue-600"
                                                    )}
                                                    onClick={() => setSelectedCurrency(currency)}
                                                >
                                                    <span className="mr-2">{getCurrencyIcon(currency.code)}</span>
                                                    <span>{currency.name} ({currency.symbol})</span>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" className="w-full justify-between">
                                                <div className="flex items-center">
                                                    <CountryFlag code={selectedLanguage.code} className="mr-2" />
                                                    <span>{selectedLanguage.name}</span>
                                                </div>
                                                <ChevronDown className="h-4 w-4 ml-2" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-[200px]">
                                            {languages.map((language) => (
                                                <DropdownMenuItem
                                                    key={language.code}
                                                    className={cn(
                                                        "cursor-pointer",
                                                        selectedLanguage.code === language.code && "bg-blue-50 text-blue-600"
                                                    )}
                                                    onClick={() => setSelectedLanguage(language)}
                                                >
                                                    <CountryFlag code={language.code} className="mr-2" />
                                                    <span>{language.name}</span>
                                                </DropdownMenuItem>
                                            ))}
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <Link href="/list-property" className="w-full">
                                        <Button variant="outline" className="w-full justify-between text-blue-600 border-blue-500 hover:bg-blue-50">
                                            <span>List your property</span>
                                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                                                <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Button>
                                    </Link>


                                </div>

                                <div className="flex items-center px-4 py-2 ">
                                    <Avatar className="h-8 w-8 bg-blue-100">
                                        <AvatarFallback className="text-blue-600">SN</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">Sunan</p>
                                        <p className="text-xs text-gray-500 truncate">sunan@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden lg:flex items-center space-x-3">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-full h-8 px-3 py-1 flex items-center gap-1">
                                <span className='border-2 border-gray-600 rounded-full'>{getCurrencyIcon(selectedCurrency.code)}</span>
                                <ChevronDown size={16} className="text-gray-600" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            {currencies.map((currency) => (
                                <DropdownMenuItem
                                    key={currency.code}
                                    className={cn(
                                        "cursor-pointer",
                                        selectedCurrency.code === currency.code && "bg-blue-50 text-blue-600"
                                    )}
                                    onClick={() => setSelectedCurrency(currency)}
                                >
                                    <span className="mr-2">{getCurrencyIcon(currency.code)}</span>
                                    <span>{currency.name} </span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="sm" className="rounded-full h-8 px-3 py-1 flex items-center gap-1">
                                <CountryFlag code={selectedLanguage.code} className="rounded-full" />
                                <ChevronDown size={16} className="text-gray-600" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[200px]">
                            {languages.map((language) => (
                                <DropdownMenuItem
                                    key={language.code}
                                    className={cn(
                                        "cursor-pointer flex items-center gap-2",
                                        selectedLanguage.code === language.code && "bg-blue-50 text-blue-600"
                                    )}
                                    onClick={() => setSelectedLanguage(language)}
                                >
                                    <CountryFlag code={language.code} />
                                    <span>{language.name}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/list-property">
                        <Button variant="outline" className="bg-white border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-4 py-2 flex items-center gap-1">
                            <span>List your property</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-45">
                                <path d="M7 3L13 9L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 9H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Button>
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="relative p-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <MessageCircle size={30} className="text-blue-400" />
                                <Badge variant="destructive" className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-orange-500">
                                    1
                                </Badge>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-64">
                            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="p-2 cursor-pointer hover:bg-gray-50">
                                <div className="flex flex-col">
                                    <span className="font-medium text-gray-900">Booking Confirmed</span>
                                    <span className="text-sm text-gray-500">Your booking #12345 has been confirmed.</span>
                                    <span className="text-xs text-gray-400 mt-2">10 minutes ago</span>
                                </div>
                            </div>
                            <DropdownMenuSeparator />
                            <div className="p-2 text-center">
                                <Link href="/notifications" className="text-sm text-blue-600 hover:underline">
                                    View all notifications
                                </Link>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant="ghost"
                        className="flex items-center  bg-[#FFFFFF80] hover:bg-blue-100 rounded-full px-3 py-1 text-blue-700"
                    >
                        <div className="flex items-center justify-center rounded-full">
                            <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="font-medium text-sm">Sunan</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;