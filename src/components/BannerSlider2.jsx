import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const BannerSlider2 = () => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center justify-between">
            <div data-aos="fade-up" className="pl-6 xl:pl-10 py-6">
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
            <div data-aos="flip-right" className="relative flex  ">
                <img src="https://i.ibb.co.com/5GdWx3X/bannerbg.png" alt="" className="mx-auto scale-150" />
            </div>
    </div>
    );
};

export default BannerSlider2;

 