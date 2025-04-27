import React from "react";
import { TutorialsSideBar } from "./navbar";

export default function TutorialsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row">
            <div className="text-white w-1/4 min-w-[250px] max-w-[333px] xl:min-w-[470px] xl:max-w-[630px] hidden md:block">
                <TutorialsSideBar />
            </div>

            {/* Main content that fills remaining space */}
            <main className="md:flex-1">{children}</main>
        </div>
    );
}
