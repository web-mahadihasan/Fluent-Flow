import { Button } from "@material-tailwind/react";
import watch from "../assets/play.svg"

const HomeAbout = () => {
    return (
        <div className="grid gap-6 grid-cols-2 border border-red-500">
            <div className="border">
                <img src="https://i.ibb.co.com/Q60YFqt/banner2.png" alt="" className="h-[500px]"/>
            </div>
            <div className="p-6 xl:p-10">
                <p className="text-[#9f89ff] py-1 px-4 bg-[#a38ffd]/15 w-fit rounded-full">About us</p>
                <h3 className="text-3xl font-semibold my-4 leading-relaxed text-[#333]">Ready to help you learn German Vocabulary</h3>
                <p></p>
                <div className="flex items-center gap-2 w-fit py-1 px-4  rounded-full cursor-pointer">              
                    <img src={watch} alt="" />
                    <span className="text-lg font-medium">Watch Now</span>
                </div>
            </div>            
        </div>
    );
};

export default HomeAbout;