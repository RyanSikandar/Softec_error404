import Image from "next/image"
import PakTravels from "../../../public/PakTravels.webp"
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="justify-between flex fixed top-0 z-10 bg-transparent w-screen px-4">
          <Image src={PakTravels} alt="Logo" height={170} width={170}/>
        
            <div>
            
            </div>
            <div className="flex justify-between mt-12 gap-20">
            <button className="btn btn-outline  text-[#EDBE73] hover:bg-[#EDBE73] ">Login</button>
            <button className="btn btn-outline btn-accent">Plan a trip</button>
            </div>

        </div>
    )
}
