"use client"
import {useEffect, useState } from "react";
import { Moon, Sun } from 'lucide-react';

export default function DarkModeSwitch() {
  const [dark, setDark] = useState(() => 
    typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="p-2"
    >
      {dark ? <Sun/> : <Moon/>}
    </button>
  );
}