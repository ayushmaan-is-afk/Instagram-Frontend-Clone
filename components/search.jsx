"use client";
import { useRef, useEffect, useState } from "react";
import { X, Search as SearchIcon } from "lucide-react";

export default function Search({ onClose }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <aside
      className="
        fixed top-0 left-17 h-full w-80 bg-sidebar text-sidebar-foreground border-r border-sidebar-border z-50
        flex flex-col transition-all duration-300
        shadow-lg
      "
      style={{ minWidth: "20rem", maxWidth: "24rem" }}
    >
      {/* Header */}
      <div className="px-8 pt-8 pb-4">
        <span className="font-bold text-2xl bg-sidebar text-sidebar-foreground border-r border-sidebar-border">Search</span>
      </div>

      {/* Search Input */}
      <div className="px-8 pb-4">
        <div className="flex items-center gap-2 bg-neutral-800 rounded-xl px-4 py-3">
          <SearchIcon size={20} className="text-sidebar-foreground" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            className="bg-transparent outline-none w-full text-base text-sidebar-foreground placeholder:text-neutral-400"
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

      {/* Recent or Results */}
      <div className="border-t border-neutral-800 flex-1 flex flex-col">
        <div className="px-8 pt-4 pb-2">
          <div className="text-base font-semibold text-sidebar-foreground">Recent</div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="text-neutral-400 text-base">No recent searches.</span>
        </div>
      </div>
    </aside>
  );
}

