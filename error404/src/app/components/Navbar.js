import Image from "next/image"
import PakTravels from "../../../public/PakTravels.webp"
export default function Navbar() {
    return (
        <div className="justify-between flex">
          <Image src={PakTravels} alt="Logo" height={170} width={170}/>
            <div>
            
            </div>
            <div>
                lamooo
            </div>

        </div>
    )
}
