import Molecular from "@/components/molecular";

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen h-full p-[20px] md:p-[70px] xl:pt-[180px]">
            <Molecular />
            <h2 className="text-center text-xs md:text-sm font-bold md:w-4/5 mb-16 xl:text-2xl">
                MBX is a C++ library that provides an interface for molecular dynamics (MD) drivers,
                such as LAMMPS and i-PI, to perform classical and path-integral molecular dynamics
                simulations using data-driven many-body potential energy functions (PEFs)
            </h2>

            <div className="w-full bg-[#030625] shadow-md rounded-[40px] p-0 md:p-6">
                <div className="text-white">
                    <h3 className="font-bold text-xl m-8 xl:text-5xl">What is MBX?</h3>
                    <div className="text-sm m-8 xl:text-2xl">
                        <p className="mb-3">
                            MBX is a C++ library that provides an interface for molecular dynamics
                            (MD) drivers, such as LAMMPS and i-Pl, to perform classical and
                            path-integral molecular dynamics simulations using data-driven many-body
                            potential energy functions (PEFs) [1]. The current version of MBX
                            includes our MB-pol PEF for water and our MB-nrg PEFs for halide and
                            alkali-metal ions, neat CO2 and mixed CO2/H2O mixtures, neat CH4 and
                            mixed CH4/H2O mixtures, and neat NH3, as well as our MB-nrg PEFS for
                            covalently bonded molecules such as alkanes and N-methyl acetamide.
                        </p>
                        <p className="mb-3">
                            MBX acts as a client that returns MB-pol and MB-nrg energies and forces
                            while the actual molecular dynamics is controlled by the MD driver. In
                            the case of i-Pl, the communication between MBX and i-PI can be
                            established in two ways: Internet and Unix domain sockets. Please refer
                            to the i-PI manual for more details. For LAMMPS, the MBX interface is
                            added through the combination of specific FIX and PAIR_STYLE commands.
                            Please refer to the LAMMPS manual for more details.
                        </p>
                        <p className="mb-3">
                            MBX can be downloaded from our GitHub page. The installation
                            instructions, along with specific details about the interfaces with
                            LAMMPS and i-PI, are included in the README file.
                        </p>
                        <p className="mb-3">
                            Questions about MBX and the interfaces with LAMMPS and i-PI should be
                            posted on the MBX Google Group. For classical molecular dynamics
                            simulations, we recommend using LAMMPS since it provides better
                            performance with MBX. Since MBX is parallelized using both OpenMP and
                            MPI, the specific combination of OMP threads and MPI tasks in the LAMMPS
                            simulations is sensitive to the system&apos;s size.
                        </p>
                        <p className="mb-3">
                            For path-integral molecular dynamics simulations, we recommend using
                            i-Pl since it provides a wide set of methods based on path integrals.
                        </p>
                        <p className="mb-3">
                            The structure and performance of the current version of MBX are
                            described in Ref. [1]. MBX is under continued development and
                            optimization. All updates are posted on this page and our GitHub page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
