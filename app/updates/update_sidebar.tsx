"use client";

import React from "react";

type UpdateItem = {
  id: string;
  title: string;
}

type UpdateSidebarProps = {
  selectedId: string;
  onSelect: (id: string) => void;
  updates: UpdateItem[];
}

export default function UpdateSidebar({ selectedId, onSelect, updates }: UpdateSidebarProps) {
  return (
    <div className="bg-[#040938] rounded-xl p-4 w-full md:w-[250px] text-white space-y-4">
      <h2 className="text-xl font-bold mb-4">Updates</h2>
      <ul className="space-y-2">
        {updates.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => { onSelect(item.id); }}
              className={`w-full text-left px-3 py-2 rounded-md 
                ${
                  selectedId === item.id
                    ? "bg-[#181A44] font-semibold"
                    : "bg-transparent hover:bg-[#1E1F4B]"
                }`}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}