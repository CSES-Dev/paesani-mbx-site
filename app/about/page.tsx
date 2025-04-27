import React from "react";
import Contributors from "./Contributors";
// import curData from "./about_placeholder_c.json";
// import forData from "./about_placeholder_f.json";
//not needed -> already implemented in Contributors.tsx

export default function About() {
    return (
        <div className="bg-[#030625] text-white min-h-screen h-full rounded-[40px] m-[20px] md:m-[70px]">
            <div className="flex flex-col px-[20px] py-[40px] md:px-[80px] md:py-[80px]">
                {/* Page Title */}
                <h2 className="text-[#FFFFFF] font-bold text-3xl xl:text-6xl pb-[20px] md:pb-[40px]">
                    Paesani Research Group
                </h2>
                <p className="pb-[15px] xl:text-2xl">
                    We are a theoretical chemistry group working at the intersection of quantum
                    chemistry, statistical mechanics, and computer science.
                </p>
                <p className="pb-[40px] xl:text-2xl">
                    We are interested in developing new methods and software to predict the behavior
                    of complex molecular systems at different length and time scales.
                </p>

                {/* Client Component */}
                <Contributors />
            </div>
        </div>
    );
}
