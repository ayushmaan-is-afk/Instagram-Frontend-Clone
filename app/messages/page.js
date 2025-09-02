"use client";
import { useRef, useEffect, useState } from "react";
import { X, Search as SearchIcon, MessageCircle } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from '@/components/sidebar'
import Search from '@/components/search'
import { Skeleton } from "@/components/ui/skeleton"
import Direct_messages from "@/components/direct_messages";
import { Select_id } from "@/components/combobox";

export default function messages() {
    const DmHandler = (e) => {
        if (setshowMessage(false)) {
            setshowMessage(true);
        } else {
            setshowMessage(false);
        }
    }
    const [showMessage, setshowMessage] = useState(false);
    const inputRef = useRef(null);
    const [query, setQuery] = useState("");
    const [ShowSearch, setShowSearch] = useState(false);
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <main className="flex">
            <Sidebar setShowSearch={setShowSearch} ShowSearch={ShowSearch} />
            {ShowSearch && <Search />}
            <aside
                className="
                    fixed top-0 left-16 h-full w-100 bg-sidebar text-sidebar-foreground border-r border-sidebar-border z-50
                    flex flex-col transition-all duration-300
                    shadow-lg
                    "
                style={{ minWidth: "20rem", maxWidth: "24rem" }}
            >
                <div className="px-8 pt-8 pb-4">
                    <span className="font-bold text-2xl text-sidebar-foreground"><Select_id /></span>
                </div>

                <div className="px-8 pb-4">
                    <div className="flex items-center gap-2  rounded-xl px-4 py-3 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
                        <SearchIcon size={20} className="text-sidebar-foreground" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search"
                            className="outline-none bg-sidebar text-sidebar-foreground border-r border-sidebar-border w-full text-base"
                        />
                        {query && (
                            <button
                                className="p-1 rounded-full hover:bg-neutral-700 transition"
                                onClick={() => setQuery("")}
                                aria-label="Clear"
                            >
                                <X size={18} className="text-neutral-400" />
                            </button>
                        )}
                    </div>
                </div>


                <div className="flex justify-between items-center border-none w-full pt-3">
                    <span className="px-6 font-semibold">Messages</span>
                    <span className="px-3">Requests</span>
                </div>
                <div className="flex flex-col overflow-y-auto">
                    <Direct_messages onClick={DmHandler} />
                    <Direct_messages />
                    <Direct_messages />
                    <Direct_messages />
                    <Direct_messages />
                    <Direct_messages />
                </div>
            </aside>
            <div className="x1sdaud flex-1 min-h-screen flex  pt-10 w-[900px]">
            <div className="w-full max-w-[910px] mx-auto px-2 flex flex-col justify-center items-center">
                        <MessageCircle size={60} className="mb-2"/>
                        <span className="mb-1">Your Messages</span>
                        <span className="mb-1">Send a message to start a chat.</span>
                        <button className=" bg-blue-500 text-white font-semibold py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out ">Send Message</button>

            </div>
            </div>
        </main>
    );
}

