import { Button } from "@material-tailwind/react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto flex items-center justify-center">
          <div className="w-full flex justify-center items-center flex-col space-y-6">
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img
              className="w-full max-w-lg mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />
          </div>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
              Sorry, the page you are looking for doesn't exist.
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button onClick={() => navigate(-1)} className="flex items-center justify-center px-6 py-[10px] text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100 ">
                <GoArrowLeft size={18} />
                <span>Go back</span>
              </button>
              <Button onClick={()=> navigate("/")} className="bg-[#a38ffd]">Take me home</Button>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default NotFound;
