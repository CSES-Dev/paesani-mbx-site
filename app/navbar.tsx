"use client";

import clsx from "clsx";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Updates", href: "/updates" },
    { name: "Publications", href: "/publications" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "FAQ", href: "/faq" },
];

export function NavBar() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-start bg-[#111840] p-1 text-white m-4 ml-8 mr-8 rounded-lg max-lg:text-sm">
            <div className="flex space-x-5 lg:space-x-10 xl:space-x-14 items-center">
                <Image
                    src="/mbx-logo.png"
                    width={93}
                    height={41}
                    alt="MBX logo"
                    className="mr-0 lg:mr-4 xl:mr-16"
                />
                {links.map((link) => {
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx("hover:text-[#5483BF]", {
                                "text-[#5483BF]": pathname === link.href,
                            })}
                        >
                            <p>{link.name}</p>
                        </Link>
                    );
                })}
            </div>
            <div className="ml-auto bg-[#3552F2] mr-2 p-1 pl-6 pr-6 rounded-[2rem]">
                <Link key="Download" href="/download" className="font-bold hover:text-[#5483BF]">
                    Download
                </Link>
            </div>
        </div>
    );
}

export function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const closeSheet = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger
                    className="bg-[#111840] p-1 text-white m-4 rounded-lg"
                    onClick={closeSheet}
                >
                    <AlignJustify size={36} />
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#111840] overflow-y-auto">
                    <SheetTitle>
                        <Image src="/mbx-logo.png" width={140} height={62} alt="MBX logo" />
                    </SheetTitle>
                    <div className="flex flex-col bg-[#111840] text-white mt-10 text-3xl">
                        <div className="flex flex-col space-y-6">
                            {links.map((link) => {
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={clsx("hover:text-[#5483BF]", {
                                            "text-[#5483BF]": pathname === link.href,
                                        })}
                                        onClick={closeSheet}
                                    >
                                        <p>{link.name}</p>
                                    </Link>
                                );
                            })}
                            <div className="bg-[#3552F2] p-1 pl-6 pr-6 mr-auto rounded-[2rem]">
                                <Link
                                    key="Download"
                                    href="/download"
                                    className="font-bold hover:text-[#5483BF]"
                                    onClick={closeSheet}
                                >
                                    Download
                                </Link>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
