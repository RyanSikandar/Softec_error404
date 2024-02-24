import Card from "./components/Card";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import TestimonialCard from "./components/TestimonialCard";
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
      <div className="mt-10 flex justify-around text-4xl p-20 font-bold ">
        <Counter start={0} end={1000} title={"Customers"} />
        <Counter start={0} end={500} title={"Trips Planned"} />
        <Counter start={0} end={50} title={"Sites"} />
      </div>
      <p className="font-semibold text-center text-6xl mb-8">Popular Sites</p>
      <div className="flex flex-wrap justify-space-around w-screen">
        <Card src="/badshahi-mosque.webp" desc="welcome to badshahi mosque" title="Badshahi Mosque" />
        <Card src="/fairy-meadows.webp" desc="welcome to Fairy Meadows." title="Fairy Meadows" />
        <Card src="/rohtas-fort.webp" desc="welcome to Rohtas Fort." title="Rohtas Fort" />
        <Card src="/mohenjo-daro.webp" desc="welcome to Mohenjo Daro." title="Mohenjo Daro" />
        <Card src="/faisal mosque.webp" desc="welcome to Faisal Mosque." title="Faisal Mosque" />
        <Card src="/hiran-minar.webp" desc="welcome to Hiran Minar." title="Hiran Minar" />
      </div>

      <div className=" max-w-[1284px] mx-auto p-20 px-40 flex flex-col"
      // style={{ background: "url(/bg_testimonial.webp) center/cover no-repeat" }}
      >

        <p className="text-6xl font-semibold text-center my-14">Testimonials</p>

        <TestimonialCard src={"/person2.webp"} name={"Jenny"} desc={"Luvitt!!!"} align={"start"} fade={"right"} />
        <TestimonialCard src={"/person1.webp"} name={"Daisy"} desc={"Wonderful!!!"} align={"end"} fade={"left"} />
        <TestimonialCard src={"/person1.webp"} name={"Jonas"} desc={"Bangin!!"} align={"start"} fade={"right"} />
        <TestimonialCard src={"/person3.webp"} name={"Dory"} desc={"Helpful."} align={"end"} fade={"left"} />

      </div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside className="text-center">
          <img src="/PakTravels.webp" alt="logo" className=" max-w-40 mx-auto" />
          <p>PakTravels<br />Providing reliable traveling services.</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </main>
  );
}
