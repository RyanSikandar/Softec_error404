import Navbar from "@/app/components/Navbar";

const signup = () => {
  const travelTypes = [
    "Adventure",
    "Family",
    "Agritourism",
    "Luxury",
    "Business",
  ];
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
            type="text"
            placeholder="Rs."
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Travel Type
            </span>
          </div>
          <details className="dropdown">
            <summary className="m-1 btn bg-white">Adventure</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 bg-white">
              {travelTypes.map((item, index) => {
                return (
                  <li key={index}>
                    <a>{item}</a>
                  </li>
                );
              })}
            </ul>
          </details>

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Preferable Distance
            </span>
          </div>

          <input
            type="text"
            placeholder="Km"
            className="input input-bordered w-full max-w-xs h-10 bg-white"
          />

          <div className="label">
            <span className="label-text font-bold text-lg  text-black">
              Current Location
            </span>
          </div>

          <button className="btn mt-5 h-1 opacity-100">Signup</button>
        </label>
      </div>
    </div>
  );
};

export default signup;
