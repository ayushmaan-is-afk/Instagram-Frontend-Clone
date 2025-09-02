"use client"
import {React, useState} from "react";
import DarkModeSwitch from "./theme_button";
import { House, Search, Video, Compass, MessageCircle, CirclePlus, Instagram } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SearchContext } from "@/app/context/context";
import Link from "next/link";


const Sidebar = ({setShowSearch, ShowSearch}) => {
    const [create, setcreate] = useState(false)
    const handleCreate = () => {
        setcreate(!create);
    }
    const searchHandler = (e) => {  
        e.preventDefault();
        setShowSearch(!ShowSearch);
    };
    return (
   
        <aside
            className="
            fixed left-0 top-0 h-full w-20
            bg-sidebar text-sidebar-foreground
            border-r border-sidebar-border
            flex flex-col
            transition-all duration-300
            z-40
            shadow-lg
            md:shadow-none
            px-2 md:px-5 py-4
            md:h-screen
            md:bg-sidebar
            md:border-r
            md:border-sidebar-border
            md:z-auto
            md:transition-none
            md:w-68
            "
            style={{ minWidth: "5rem" }}
        >
            <nav className="flex flex-col gap-3">
                <Link href="/" className="flex items-center gap-3 px-2 py-2 rounded transition-all duration-300 mb-6">
                    <span className="transition-all duration-300 block md:hidden text-2xl">
                        <Instagram />
                    </span>
                    <span className="logo transition-all duration-300 pt-3.5  hidden md:block text-4xl tracking-tight">
                        Instagram
                    </span>
                </Link>
                <div className="flex flex-col gap-2 mb-6">
                    <Link href="/" className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <House size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Home</span>
                    </Link>
                    <Link href="" onClick={searchHandler} className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <Search size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Search</span>
                    </Link>
                    <Link href="/explore" className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <Compass size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Explore</span>
                    </Link>
                    <Link href="/reels" className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <Video size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Reels</span>
                    </Link>
                    <Link href="/messages" className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <MessageCircle size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Messages</span>
                    </Link>
                    <Link href="/" className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <CirclePlus size={26} />
                        <span className="hidden md:inline truncate transition-all duration-300">Create</span>
                    </Link>
                    <div></div>
                    <Link href="" onClick={handleCreate} className="hover:text-primary flex items-center gap-4 px-2 py-2 rounded transition-all duration-300 text-xl">
                        <Avatar className="size-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="hidden md:inline truncate transition-all duration-300">Profile</span>
                    </Link>
                </div>
                <div className="mt-4 mb-2">
                    <DarkModeSwitch />
                </div>
            </nav>
        </aside>

    );
};

export default Sidebar;