import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


const BannerSlider = () => {
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
            <div data-aos="zoom-in" className="relative flex bg-bannerBlue h-full bg-no-repeat bg-bottom md:bg-center">
                <img src="https://i.ibb.co.com/J7bMrCT/banner.png" alt="" className="h-[430px] w-[340px] mt-[68px] mx-auto" />
                <img src="https://i.ibb.co.com/Bg7v1BG/bannerbg-com.png" alt="" className="h-[145px] w-[185px] absolute -right-2 top-0 xl:right-16 xl:top-10" />
                <img src="https://i.ibb.co.com/nqpWjkD/groupimg.png" alt="" className="w-[186px] h-[124px] absolute top-48 lg:top-28 left-0 md:-left-12 xl:left-2"/>
                <div className="bg-white p-4 rounded-md absolute xl:bottom-28 bottom-20 lg:-left-16 lg:bottom-32 xl:-left-5 right-0 w-fit">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p className="font-medium">1000+ Student Ratings</p>
                </div>
            </div>
    </div>
    );
};

export default BannerSlider;