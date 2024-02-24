import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="relative h-[calc(95vh)]">
        <video
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        >
          <source src="/touristvideo.webm" />
        </video>
      </div>
    </main>
  );
}
