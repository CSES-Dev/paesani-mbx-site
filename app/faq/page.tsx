
/*
 * FAQ Page Component
 */
export default function FAQ() {
    return (
        <div className="bg-[#030625] text-white min-h-screen h-full rounded-[40px] m-[20px] md:m-[70px]">
            <div className="flex flex-col px-[20px] py-[40px] md:px-[80px] md:py-[80px]">
                {/* Page Title */}
                <h2 className="text-white font-bold text-3xl pb-[20px] md:pb-[50px]">
                     Frequently Asked Questions
                </h2>

                {/* Introductory Text */}
                <p className="text-base text-white  max-w-3xl">
                    MBX is periodically updated with performance improvements and the addition of other MB-nrg PEFs. 
                    For any questions about MBX, installation issues, or general usage inquiries, please use the MBX Google Group:{" "}
                    <a
                        href="https://groups.google.com/g/mbx-users"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#60A7FF] underline hover:text-blue-300"
                    >
                        https://groups.google.com/g/mbx-users
                    </a>
                </p>
                {/* Accordian */}
                
            </div>
        
        </div>
    );
}

