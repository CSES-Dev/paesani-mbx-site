"use client";

import React, { useState } from "react";
import UpdateSidebar from "./update_sidebar";

type UpdatesContentProps = {
  updatesData: {
    updates: {
      id: string;
      title: string;
      releaseNotes?: { type: string; description: string }[];
      newFeatures?: string[];
    }[];
  };
}

export default function UpdatesContent({ updatesData }: UpdatesContentProps) {
  const [selectedId, setSelectedId] = useState("oct-2024"); // default selection

  const selectedUpdate = updatesData.updates.find(u => u.id === selectedId);

  return (
    <div className="flex flex-col md:flex-row px-[20px] py-[40px] md:px-[80px] md:py-[80px] gap-8">
      <UpdateSidebar 
        selectedId={selectedId} 
        onSelect={(id: string) => { setSelectedId(id); }} 
        updates={updatesData.updates}
      />
      <div className="flex-1">
        {selectedUpdate ? (
          <>
            <h1 className="text-2xl font-bold mb-6">{selectedUpdate.title}</h1>
            {/* Render update details */}
          </>
        ) : (
          <p>No update selected.</p>
        )}
      </div>
    </div>
  );
}
