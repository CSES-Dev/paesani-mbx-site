import Molecular from "@/components/molecular";

import data from "@/content/content.json"

export default function Home() {
    const homeData = data.home;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 md:p-8">
            <Molecular />
            <h2 className="text-center text-xs md:text-sm font-bold md:w-4/5 mb-16">
                {homeData.subheading}
            </h2>

            <div className="max-w-7xl w-full bg-[#111840] shadow-md rounded-[2rem] p-0 md:p-6">
                <div className="text-white">
                    <h3 className="font-bold text-xl m-8">{homeData.info_title}</h3>
                    <div className="text-sm m-8">
                        <p className="mb-3 whitespace-pre-wrap">
                            {homeData.info}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
