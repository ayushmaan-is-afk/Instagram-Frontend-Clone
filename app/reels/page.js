"use client"
import React, { use } from 'react'
import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import Search from '@/components/search';
import { icons, Pause } from 'lucide-react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Reels = () => {
  const [pause, setPause] = useState(false);
  

  const interactives =[
    {icons: Heart, count: "30.5K"},
    {icons: MessageCircle, count: "2K"},
    {icons: Send}, 
    {icons: Bookmark}, 
  ]
  
  const handleClick = (e) => {
    if (e.target.paused) {
      e.target.play();
      setPause(false);
    } else {
      e.target.pause();
      setPause(true);
    }
  };
    const reels =[
      { src: "/Video1.mp4", alt: "reel1" },
      { src: "/Video2.mp4", alt: "reel2" },
    ];

    const [ShowSearch, setShowSearch] = useState(false);
  return (
    <div>
    <Sidebar setShowSearch={setShowSearch} ShowSearch={ShowSearch} />
      {ShowSearch && <Search />}
    <main className="x1sdaud flex-1 min-h-screen flex justify-center w-full items-start pt-8 pb-8">
        <div className="reel_container">
           {reels.slice(0, 2).map((reel, idx) => (
            <div key={reel.src} className="w-full h-full flex flex-row gap-3 reels">
              <video
              onClick={handleClick}
                src={reel.src}
                alt={reel.alt}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload='metadata'
              />
              <div className="flex flex-col reel_icons relative gap-2 ">
                {interactives.map((interactive, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <interactive.icons size={28} className="text-sidebar-foreground hover:text-red-500 cursor-pointer"/>
                    <span className="text-sm text-sidebar-foreground">{interactive.count}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </main>
    </div>
  )
}

export default Reels
