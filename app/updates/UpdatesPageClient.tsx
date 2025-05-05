"use client";

import React, { useState } from "react";
import UpdatesContent from "./UpdatesContent";
import UpdateSidebar from "./update_sidebar";
import updatesData from "./versions_placeholder.json";

export default function UpdatesPageClient() {
  const [selectedId, setSelectedId] = useState(updatesData.updates[0]?.id ?? "");

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
      {/* Sidebar blob */}
      <div className="shadow-lg rounded-2xl bg-[#040938] p-4 w-full md:w-[250px]">
        <UpdateSidebar
          selectedId={selectedId}
          onSelect={setSelectedId}
          updates={updatesData.updates}
        />
      </div>
      {/* Main content blob */}
      <div className="flex-1 shadow-lg rounded-2xl bg-[#111840] p-8 min-h-[400px]">
        <UpdatesContent
          updatesData={updatesData}
          selectedId={selectedId}
        />
      </div>
    </div>
  );
}