"use client";

import clsx from "clsx";
import React, { useState } from "react";

import data from "@/content/content.json";

export default function FAQPage() {
    const faqs = data.faq.items;
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="bg-[#030625] text-white min-h-screen rounded-[40px] m-[20px] md:m-[70px]">
            <div className="flex flex-col px-[20px] py-[40px] md:px-[80px] md:py-[80px]">
                {/* Page Title */}
                <h2 className="font-bold text-3xl mb-4">Frequently Asked Questions</h2>

                {/* Intro Text */}
                <p className="text-sm mb-8">
                    MBX is periodically updated with performance improvements and the addition of
                    other MB‑nrg PEFs. For any questions about MBX, installation issues, or general
                    usage inquiries, please use the MBX Google Group:{" "}
                    <a
                        href="https://groups.google.com/g/mbx-users"
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://groups.google.com/g/mbx-users
                    </a>
                </p>

                {/* Accordion */}
                <div className="flex flex-col space-y-4">
                    {faqs.map((f, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div key={idx} className="overflow-hidden">
                                <button
                                    onClick={() => {
                                        toggle(idx);
                                    }}
                                    className={clsx(
                                        "w-full flex justify-between items-center px-6 py-4 text-left font-bold text-white",
                                        "bg-[#0C1E8C]",
                                        isOpen
                                            ? "rounded-t-[10px] rounded-b-none"
                                            : "rounded-[10px]",
                                    )}
                                >
                                    {f.question}
                                    <span>{isOpen ? "−" : "+"}</span>
                                </button>

                                {isOpen && (
                                    <div className="px-6 py-4 text-sm text-white bg-[#111840] rounded-b-[10px]">
                                        <p>{f.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
