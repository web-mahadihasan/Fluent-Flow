import logo from "../assets/logo-only.png"

const Loader = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center min-h-[300px]">
        <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#a38ffd]"></div>
        <img
          src={logo}
          className="rounded-full h-12 w-12"
        />
      </div>
    </div>
  );
};

export default Loader;
