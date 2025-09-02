"use client"
import React, { useState } from 'react'
import Sidebar from '@/components/sidebar'
import Search from '@/components/search'

const images = [
  { src: "/img1.jpg", alt: "img1" },
  { src: "/img2.jpg", alt: "img2" },
  { src: "/img3.jpg", alt: "img3", vertical: true },
  { src: "/img4.jpg", alt: "img4" },
  { src: "/img5.jpg", alt: "img5" },
  { src: "/img6.jpg", alt: "img6", vertical: true },
  { src: "/img1.jpg", alt: "img7" },
  { src: "/img2.jpg", alt: "img8" },
  { src: "/img3.jpg", alt: "img9",  },
  { src: "/img4.jpg", alt: "img10" },
  { src: "/img5.jpg", alt: "img11" },
  { src: "/img6.jpg", alt: "img12"},
  { src: "/img3.jpg", alt: "img1", vertical: true },
  { src: "/img4.jpg", alt: "img4" },
  { src: "/img5.jpg", alt: "img5" },

];

const ExplorePage = () => {
  const [ShowSearch, setShowSearch] = useState(false);

  return (
    <div className="flex">
      <Sidebar setShowSearch={setShowSearch} ShowSearch={ShowSearch} />
      {ShowSearch && <Search />}
      <main className="x1sdaud flex-1 min-h-screen flex justify-center items-start pt-10">
        <div
          className="
            grid grid-cols-3 grid-rows-4 gap-0.5
            w-full max-w-[910px] mx-auto
            px-2
          "
        >
          {images.slice(0, 15).map((img, idx) => (
            <div
              key={img.src}
              className={`relative w-full ${
                img.vertical
                  ? "row-span-2 aspect-[9/18]"
                  : "aspect-square"
              } overflow-hidden`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ExplorePage