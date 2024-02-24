import Image from "next/image"
import PakTravels from "../../../public/PakTravels.webp"
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="justify-between flex">
          <Image src={PakTravels} alt="Logo" height={170} width={170}/>
        
            <div>
            
            </div>
            <div className="flex justify-between mt-12 gap-20 mr-4">
            <button className="btn btn-outline bg-[#EDBE73] text-black hover:bg-[#60422A] ">Default</button>
            <button className="btn btn-outline btn-accent">Plan a trip</button>
            </div>

        </div>
    )
}
