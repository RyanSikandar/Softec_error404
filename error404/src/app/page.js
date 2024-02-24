import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative h-[calc(95vh)]">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        >
          <source src="/touristvideo.webm" />
        </video>
        <div className="flex flex-col absolute top-[30vh]  left-[15vh] items-center">
          <div className="text-center text-[4rem] text-white font-bold font-sans">Welcome to Pak Travels,<br /> Where you dream and we make it possible !</div>

          <div className="ml-14"><button className="btn mt-10 w-32 hover:bg-[#AE7638] bg-[#F9C886] border-0 text-black">Book a Plan</button></div>

        </div>

      </div>

    </main>
  );
}
