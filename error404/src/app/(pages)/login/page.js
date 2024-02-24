import Navbar from "@/app/components/Navbar";

const login = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center" style={{background : "url(/BM-503.webp) center/cover no-repeat"}}>
        <label className="form-control max-w-x bg-[#EDBE73] opacity-100 p-10 rounded-lg">
          <p className="text-center text-2xl font-extrabold">Login</p>
          <div className="label">
            <span className="label-text font-bold text-lg text-black">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">Password</span>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <button className="btn mt-5 h-1 opacity-100">Login</button>
        </label>
      </div>
    </div>
  );
};

export default login;
