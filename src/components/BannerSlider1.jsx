import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const BannerSlider1 = () => {
    const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center">
      <div className="pl-6 xl:pl-10 py-6">
        <h1 className="font-bold text-3xl lg:text-4xl leading-relaxed">
          Unlock Your Language Potential with
          <span className="text-[#a38ffd] uppercase inline-block mt-2 ml-3"> Fluent Flow</span>
        </h1>
        <p className="text-black/70 leading-7 my-6">
          Fluent Flow, where learning knows no bounds. We believe that
          education is the key to personal and professional growth, and we're
          here to guide you on your journey to success. our cutting-edge Learning
          Management System is designed to elevate your learning experience.
        </p>
        <Button onClick={() => navigate("/start-learning")} variant="filled" className="bg-[#a38ffd] tracking-wider">Start Learning</Button>
      </div>
      <div className="relative">
        <div className="bg-[#a38ffd]/40 rounded-full h-[380px] lg:h-[410px] w-[380px] left-3 lg:w-[410px] absolute -bottom-[85px] md:hidden lg:flex lg:left-7  xl:left-[18%] ring-2 ring-[#a38ffd]/50 ring-offset-8 z-20 shadow-2xl"></div>
        <img src="https://i.ibb.co.com/hRKMHJQ/banner3.png" alt="" className=" transform scale-x-[-1] mx-auto h-[480px] z-30 relative top-20 rounded-b-full" />
        <img src="https://i.ibb.co.com/vqLNKb0/Group.png" alt="" className="absolute lg:top-20 xl:top-20 top-32 xl:right-48 right-8 lg:right-24 z-0" />
        <img src="https://i.ibb.co.com/vqLNKb0/Group.png" alt="" className="absolute  lg:left-0 xl:left-14 lg:-bottom-16 z-0" />
      </div>
    </div>
  );
};

export default BannerSlider1;
