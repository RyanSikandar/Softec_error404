"use client"
import Navbar from "@/app/components/Navbar";
import { useState } from "react";

const signup = () => {
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [budget,setBudget]=useState("")
  const [travel,setTravel]=useState("Adventure")
  const [distance,setDistance]=useState("")
  const [cnfpass,setCnfPass]=useState("")
  const [currentLocation,setCurrentLocation]=useState("")
  const travelTypes = [
    "Adventure",
    "Family",
    "Agritourism",
    "Luxury",
    "Business",
  ];
  const handleClick = async () => {
    if (name != "" || phone != "" || email != "" || budget != "" || password != "" || currentLocation != "") {
      let result = await fetch("https://pak-travel-4662670627ff.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
      console.log(result);
    }
    else { alert("Please fill in your details properly") }

  }
  return (
    <div>
      <Navbar />
      <div
        className="pt-[30vh] flex justify-center items-center"
        style={{ background: "url(/BM-503.webp) center/cover no-repeat" }}
      >
        <label className="form-control max-w-x bg-[#EDBE73] opacity-100 p-10 rounded-lg">
          <p className="text-center text-2xl font-extrabold">Signup</p>
          <div className="label">
            <span className="label-text font-bold text-lg text-black">
              Name
            </span>
          </div>
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Ph No.
            </span>
          </div>
          <input
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
            type="text"
            placeholder="03XX-XXXXXXX"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Email
            </span>
          </div>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Password
            </span>
          </div>

          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Confirm Password
            </span>
          </div>
          <input
          value={cnfpass}
          onChange={(e)=>setCnfPass(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Budget
            </span>
          </div>
          <input
          value={budget}
          onChange={(e)=>setBudget(e.target.value)}
            type="text"
            placeholder="Rs."
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Travel Type
            </span>
          </div>

            <select className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-white">
              {travelTypes.map((item, index) => {
                return (
                  <option key={index} value={item} onClick={(e)=>setTravel(e.target.value)}>
                    <a>{item}</a>
                  </option>
                );
              })}
            </select>

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Preferable Distance
            </span>
          </div>

          <input
          value={distance}
          onChange={(e)=>setDistance(e.target.value)}
            type="text"
            placeholder="Km"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Current Location
            </span>
          </div>
          <input
          value={currentLocation}
          onChange={(e)=>setCurrentLocation(e.target.value)}
            type="text"
            placeholder="Current Location"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <button className="btn mt-5 h-1 opacity-100" onClick={handleClick}>Signup</button>
        </label>
      </div>
    </div>
  );
};

export default signup;
