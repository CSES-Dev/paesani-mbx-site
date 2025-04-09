import React from "react";
import UpdatesContent from "./UpdatesContent"; // interactive part as client component
import updatesData from "./versions_placeholder.json";

export default function UpdatesPage() {
  // This server component can do data fetching, etc.
  return (
    <div className="bg-[#030625] text-white min-h-screen h-full rounded-[40px] m-[20px] md:m-[70px]">
      <UpdatesContent updatesData={updatesData} />
    </div>
  );
}
