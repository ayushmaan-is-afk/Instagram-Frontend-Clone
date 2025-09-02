"use client";
import Sidebar from "@/components/sidebar";
import { createContext, useContext } from "react";
import { SearchContext } from "./context/context";
import { useState } from "react";
import Search from "@/components/search";
import { Heart, MessageCircle, Send, Bookmark, Ellipsis } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Dis_pic from "@/components/display_picture";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Recommendations from "@/components/recommendations";


export default function Home() {
  const [pause, setPause] = useState(false);
  const interactives = [
    { icons: Heart, count: "30.5K" },
    { icons: MessageCircle, count: "2K" },
    { icons: Send },
  ]
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const handleClick = (e) => {
    if (e.target.paused) {
      e.target.play();
      setPause(false);
    } else {
      e.target.pause();
      setPause(true);
    }
  };


  const reels = [
    { src: "/Video1.mp4", alt: "reel1" },
    { src: "/Video2.mp4", alt: "reel2" },
  ];

  const images = [
    { src: "/img1.jpg", alt: "img1" },
    { src: "/img2.jpg", alt: "img2", vertical: true },
    { src: "/img3.jpg", alt: "img3" },
  ];



  const [ShowSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);



  return (

    <div className="flex ">
      <Sidebar setShowSearch={setShowSearch} ShowSearch={ShowSearch} onNotificationClick={() => setShowNotifications(true)} />
      {ShowSearch && <Search />}
      <main className="x1sdaud flex-1 min-h-screen flex justify-center items-start pt-5">
        <div
          className="
            flex flex-col
            w-full max-w-[910px] mx-auto
          "
        >
          <div className="stories_container flex-row">
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className={"size-13"}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </div>
          <div className="home_content w-full border-none flex flex-col">
            <Card className={"border-none bg-background"}>
              <CardHeader>
                <CardTitle>You</CardTitle>
                <CardAction><Ellipsis /></CardAction>
              </CardHeader>
              <CardContent>
                <img src="/img1.jpg" alt="" />
                <div className="flex flex-row gap-2">
                  {interactives.map((interactive, index) => (
                    <div key={index} className="flex flex-col items-center gap-5 mt-2">
                      <interactive.icons size={25} className="text-sidebar-foreground hover:text-red-500 cursor-pointer" />
                      <span className="text-sm text-sidebar-foreground">{interactive.count}</span>
                    </div>
                  ))}
                  <Bookmark size={25} className="mt-2 text-sidebar-foreground cursor-pointer ml-auto" />
                </div>
              </CardContent>
              <CardFooter>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Add comments..."
                  className="outline-none text-sidebar-foreground border-none bg-background w-full text-base"
                />
              </CardFooter>
            </Card>
            <Card className={"border-none bg-background"}>
              <CardHeader>
                <CardTitle>a_girl_(idk)</CardTitle>
                <CardAction><Ellipsis /></CardAction>
              </CardHeader>
              <CardContent>
                <img src="/img2.jpg" alt="" />
                <div className="flex flex-row gap-2">
                  {interactives.map((interactive, index) => (
                    <div key={index} className="flex flex-col items-center gap-5 mt-2">
                      <interactive.icons size={25} className="text-sidebar-foreground hover:text-red-500 cursor-pointer" />
                      <span className="text-sm text-sidebar-foreground">{interactive.count}</span>
                    </div>
                  ))}
                  <Bookmark size={25} className="mt-2 text-sidebar-foreground cursor-pointer ml-auto" />
                </div>
              </CardContent>
              <CardFooter>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Add comments..."
                  className="outline-none text-sidebar-foreground border-none bg-background w-full text-base"
                />
              </CardFooter>
            </Card>
            <Card className={"border-none bg-background"}>
              <CardHeader>
                <CardTitle>Some_random_meme_guy</CardTitle>
                <CardAction><Ellipsis /></CardAction>
              </CardHeader>
              <CardContent>
                <video
                  onClick={handleClick}
                  src="/Video1.mp4"
                  alt="Video1"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  preload='metadata'
                />
                <div className="flex flex-row gap-2">
                  {interactives.map((interactive, index) => (
                    <div key={index} className="flex flex-col items-center gap-5 mt-2">
                      <interactive.icons size={25} className="text-sidebar-foreground hover:text-red-500 cursor-pointer" />
                      <span className="text-sm text-sidebar-foreground">{interactive.count}</span>
                    </div>
                  ))}
                  <Bookmark size={25} className="mt-2 text-sidebar-foreground cursor-pointer ml-auto" />
                </div>
              </CardContent>
              <CardFooter>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Add comments..."
                  className="outline-none text-sidebar-foreground border-none bg-background w-full text-base"
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>


  );
}
