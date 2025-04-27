import React from "react";

export default function Compilation() {
    return (
        <div>
            <div className="bg-[#030625] text-white min-h-screen h-full rounded-[40px] m-[20px] md:my-[70px] md:ml-[32px] md:mr-[45px]">
                <div className="flex flex-col p-[20px] md:p-[80px]">
                    <h2 className="font-bold text-3xl xl:text-6xl pb-[30px] md:pb-[50px]">
                        October 2024 (Version x.0)
                    </h2>

                    <p className="pb-[30px] xl:text-2xl">
                        The following requirements need to be fulfilled in order to successfully
                        install the software:
                    </p>
                    <ul className="list-disc ml-7 pb-[30px] xl:text-2xl">
                        <li>g++/gcc v4.9 or higher</li>
                        <li>icpc/icc v2018 or higher [optional but recommended]</li>
                        <li>MPI compilers [optional, needed only for LAMMPS]</li>
                        <li>FFTW libraries</li>
                        <li>GSL libraries [optional, needed only for normal_modes executable]</li>
                        <li>Read the entire README before doing anything!</li>
                    </ul>

                    <h3 className="text-2xl font-bold pb-[20px] xl:text-5xl">Setup</h3>
                    <p className="pb-[20px] xl:text-2xl">
                        The home directory of MBX will be referred to as $MBX_HOME. You must set
                        this environment variable, which can be exported either manually or by
                        sourcing sourceme.sh:
                    </p>
                    <div className="bg-[#D1D1D1] text-black rounded-[10px] mb-[30px] xl:text-2xl">
                        <ul className="m-[10px] md:m-[35px]">
                            <li>git clone https://github.com/paesanilab/MBX.git</li>
                            <li>cd MBX/</li>
                            <li>export MBX_HOME=$PWD</li>
                        </ul>
                    </div>

                    <h3 className="text-2xl font-bold pb-[20px] xl:text-5xl">Compilation</h3>
                    <p>
                        MBX has different compilation instructions depending on how you plan to use
                        it:
                    </p>
                    <ul className="list-disc ml-7 xl:text-2xl">
                        <li>
                            For use with i-PI, Python, Fortran, or standalone, perform a basic
                            installation
                        </li>
                        <li>For use with LAMMPS, perform an alternative MBX_MPI installation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
