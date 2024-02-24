import Navbar from "@/app/components/Navbar";

const login = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[75vh] flex justify-center items-center" style={{backgroundImage : "url(/badshahi-mosque.webp)"}}>
        <label className="form-control max-w-x bg-[#EDBE73] opacity-80 p-10 rounded-lg">
          <p className="text-center text-2xl font-extrabold">Login</p>
          <div className="label">
            <span className="label-text font-bold text-lg text-black">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs h-10"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">Password</span>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs h-10"
          />

          <button className="btn mt-5 h-1">Login</button>
        </label>
      </div>
    </div>
  );
};

export default login;
