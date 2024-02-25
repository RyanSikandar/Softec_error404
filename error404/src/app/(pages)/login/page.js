"use client"
import Navbar from "@/app/components/Navbar";
import { useState } from "react";


const login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleClick = async () => {
    if (email != "" || password != "") {
      let result = await fetch("https://pak-travel-4662670627ff.herokuapp.com/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password })
      });
    }
    else { alert("Please fill in your details properly") }

  }
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center" style={{ background: "url(/BM-503.webp) center/cover no-repeat" }}>
        <label className="form-control max-w-x bg-[#EDBE73] opacity-100 p-10 rounded-lg">
          <p className="text-center text-2xl font-extrabold">Login</p>
          <div className="label">
            <span className="label-text font-bold text-lg text-black">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">Password</span>
          </div>
          <input
            type="password"

            placeholder="Password"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn mt-5 h-1 opacity-100" onClick={handleClick}>Login</button>
        </label>
      </div>
    </div>
  );
};

export default login;
