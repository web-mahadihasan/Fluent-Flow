import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const BannerSlider2 = () => {
    const navigate = useNavigate()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center justify-between">
            <div data-aos="fade-up" className="pl-6 xl:pl-10 py-6">
                <h1 className="font-bold text-3xl lg:text-4xl leading-relaxed">
                    Master German Vocabulary <br /> with Ease
                </h1>
                <p className="text-black/70 leading-7 my-6">
                    Dive into an interactive learning experience that makes building your German vocabulary fun, fast, and effective. Start speaking confidently today!
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

 