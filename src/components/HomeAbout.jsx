import { Button } from "@material-tailwind/react";
import bgShadow from "../assets/bgShadow.svg"
import watch from "../assets/play.svg"
import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 my-24 bg-white/90">
            <div className="border bg-bgShadow bg-no-repeat bg-bottom shadow rounded-tl-[100px] rounded-br-[100px]">
                <img src="https://i.ibb.co.com/Q60YFqt/banner2.png" alt="" className="h-[600px] mt-9 ml-6"/>
            </div>
            <div className="p-6 xl:p-10">
                <p className="text-[#9f89ff] py-1 px-4 bg-[#a38ffd]/15 w-fit rounded-full">About us</p>
                <h3 className="text-3xl font-semibold my-4 leading-snug text-[#333]">Ready to help you learn German Vocabulary</h3>
                <div>
                    <ul className="list-disc pl-12 space-y-2">
                        <li>
                            <h6 className="text-xl font-medium text-black/85">Step-by-Step Lessons</h6>
                            <p className="text-black/65">Master German vocabulary lesson by lesson with clear and structured guidance.</p>
                        </li>
                        <li>
                            <h6 className="text-xl font-medium text-black/85">Comprehensive Explanations</h6>
                            <p className="text-black/65">Learn English meanings, usage contexts, and correct pronunciation for every word and phrase.</p>
                        </li>
                        <li>
                            <h6 className="text-xl font-medium text-black/85">Interactive Tutorials</h6>
                            <p className="text-black/65">Watch engaging videos to reinforce your understanding and improve your speaking skills.</p>
                        </li>
                        <li>
                            <h6 className="text-xl font-medium text-black/85">Practical Learning</h6>
                            <p className="text-black/65">Build your confidence with real-world examples and context-based exercises.</p>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6 mt-2">
                    <Link to={"/auth/login"}><Button  variant="filled" className="bg-[#a38ffd] tracking-wider">Join us</Button></Link>
                    <Link to={"/tutorials"} className="flex items-center gap-2 w-fit py-1 px-4  rounded-full cursor-pointer my-3 hover:shadow duration-300">
                        <img src={watch} alt="" />
                        <span className="text-lg font-medium">Watch Now</span>
                    </Link>
                </div>
            </div>            
        </div>
    );
};

export default HomeAbout;