import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          alt="Banner Image"
          src={banner}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Development Stack!
            </span>
          </h1>
          
          <p className="py-6 text-gray-700 text-2lg">
            Explore frontend, backend, database, and tooling options,
            <br /> compare them side by side, and put together the stack that
            fits your <br /> next project.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl px-4 lg:px-6 border-none">
              Explore Technologies
            </button>

            <button className="btn rounded-2xl p-[2px] bg-gradient-to-r from-purple-600 to-pink-500 border-none">
              <span className="bg-base-100 rounded-[14px] px-4 lg:px-6 py-2">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
