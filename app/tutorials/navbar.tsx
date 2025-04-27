"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Compilation and Installation", href: "/tutorials/compilation" },
    { name: "Testing", href: "/tutorials/testing" },
    { name: "JSON File", href: "/tutorials/jsonfile" },
    { name: "Main Executables", href: "/tutorials/executables" },
    { name: "Interfaces", href: "/tutorials/interfaces" },
    { name: "Coverage", href: "/tutorials/coverage" },
];

export function TutorialsSideBar() {
    const pathname = usePathname();

    return (
        <div className="bg-[#030625] text-white rounded-[20px] min-w-[205px] max-w-[288px] xl:min-w-[425px] xl:max-w-[585px] mt-[70px] ml-[45px] xl:p-6">
            <div className="flex flex-col p-[20px]">
                <h1 className="text-2xl xl:text-5xl text-[#A5A5A5] pb-[11px] xl:pb-[25px]">
                    Tutorials
                </h1>
                <div className="flex flex-col border-l-2 border-[#60A7FF] pl-[25px]">
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "text-xl xl:text-4xl py-[7px] xl:py-[14px] hover:font-bold",
                                    {
                                        "font-bold": pathname === link.href,
                                    },
                                )}
                            >
                                <p>{link.name}</p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
