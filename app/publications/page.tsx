import Image from "next/image";
import React from "react";

import data from "@/content/content.json"

export default function Publications() {
    const publications = data.publications.items;

    function Item({index}: {index: number}) {
        const item = publications[index];
        return (
            <div className="bg-white text-black rounded-[40px] p-6 mb-6">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <div className="flex">
                    {/* Left column for text */}
                    <div className="w-1/2 pr-4">
                        <p className="mb-1">{item.author}</p>
                        <p className="mb-1">{item.date}</p>
                        <p className="mb-1">
                            <a href={item.link} className="text-blue-500 underline">
                                {item.link_title}
                            </a>
                        </p>
                        <p className="text-sm mb-4">{item.description}</p>
                    </div>
                    {/* Right column for image placeholder */}
                    {item.img_src !== "" &&
                        <div className="w-1/2">
                            <div className="w-full h-[150px] flex items-center justify-center text-black rounded-[40px] relative">
                                {/*Image here*/}
                                <Image 
                                    src={item.img_src}
                                    alt={item.img_alt}
                                    fill={true}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#030625] text-white min-h-screen h-full rounded-[40px] m-[20px] md:m-[70px]">
            <div className="flex flex-col px-[20px] py-[40px] md:px-[80px] md:py-[80px]">
                {/* Page Title */}
                <h2 className="font-bold text-3xl pb-[20px] md:pb-[50px]">Publications</h2>

                {publications.map((_, i) => (
                    <Item key={i} index={i} />
                ))}
            </div>
        </div>
    );
}
