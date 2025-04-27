"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import curData from "./about_placeholder_c.json";
import forData from "./about_placeholder_f.json";

export default function Contributors() {
    const [activeTab, setActiveTab] = useState("current");
    const contributors = activeTab === "current" ? curData : forData;

    return (
        <div>
            {/* Tabs */}
            <div className="flex border-b border-gray-500 mb-6 xl:text-3xl">
                <button
                    className={`pb-2 px-4 font-semibold ${activeTab === "current" ? "border-b-2 border-blue-500" : "text-gray-400"}`}
                    onClick={() => {
                        setActiveTab("current");
                    }}
                >
                    Current Contributors
                </button>
                <button
                    className={`pb-2 px-4 font-semibold ${activeTab === "former" ? "border-b-2 border-blue-500" : "text-gray-400"}`}
                    onClick={() => {
                        setActiveTab("former");
                    }}
                >
                    Former Contributors
                </button>
            </div>

            {/* Contributors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-6">
                {contributors.map((person, index) => (
                    <div key={index} className="bg-gray-400 h-[300px] flex flex-col justify-end">
                        <div className="bg-white text-black p-4 m-4">
                            <h3 className="font-bold">{person.name}</h3>
                            <p>{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
