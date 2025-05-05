"use client";

import React from "react";

type ReleaseNote = { type: string; description: string };
type UpdateItem = {
  id: string;
  version: string;
  date: string;
  releaseNotes?: ReleaseNote[];
  newFeatures?: string[];
};

type UpdatesContentProps = {
  updatesData: {
    updates: UpdateItem[];
  };
  selectedId: string;
};

export default function UpdatesContent({ updatesData, selectedId }: UpdatesContentProps) {
  const selectedUpdate = updatesData.updates.find(u => u.id === selectedId);

  return (
    <div>
      {selectedUpdate ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{selectedUpdate.version}</h1>
          <div className="text-gray-400 mb-6">{selectedUpdate.date}</div>
          {selectedUpdate.releaseNotes && selectedUpdate.releaseNotes.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Release Notes</h2>
              <ul className="list-disc pl-6 space-y-2">
                {selectedUpdate.releaseNotes.map((note, idx) => (
                  <li key={idx}>
                    <span className="font-bold">{note.type}:</span> {note.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedUpdate.newFeatures && selectedUpdate.newFeatures.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">New Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                {selectedUpdate.newFeatures.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <p>No update selected.</p>
      )}
    </div>
  );
}