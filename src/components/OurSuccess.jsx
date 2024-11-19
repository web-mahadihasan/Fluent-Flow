import user from "../assets/user.png"
import lesson from "../assets/lessonIcons.png"
import tutorial from "../assets/turorial.png"
import word from "../assets/word.png"
import SectionTitle from "./SectionTitle";
import CountUp from "react-countup";

const OurSuccess = () => {
  return (
    <div className="container mx-auto px-4 xl:px-0">
      <div>
        <SectionTitle title="Our Success" subTitle="Explore our achievements with thousands of active users, hundreds of
          engaging lessons, and a rich vocabulary database to master German
          effectively. Your success starts here!"/>
      </div>

      {/* Our success card  */}
      <div className="grid gap-4 grid-cols-4 p-6 rounded-md mb-24 bg-[#a38ffd]">
        {/* Card one  */}
        <div className="border bg-white/90 rounded-md border-gray-200 shadow-md p-4 flex flex-col items-center">
            <div className="p-3 bg-[#a38ffd]/15 rounded-full w-fit">
                <img src={user} alt="" className="w-14"/>
            </div>
            <p className="text-xl font-semibold my-3 text-gray-800">Total Active User</p>
            <h4 className="text-3xl font-bold my-3 text-black/75">{<CountUp end={3800} duration={5} />}+</h4>
        </div>
        {/* Card two  */}
        <div className="border bg-white/90 rounded-md border-gray-200 shadow-md p-4 flex flex-col items-center">
            <div className="p-3 bg-[#a38ffd]/15 rounded-full w-fit">
                <img src={lesson} alt="" className="w-14"/>
            </div>
            <p className="text-xl font-semibold my-3 text-gray-800">Total Lesson</p>
            <h4 className="text-3xl font-bold my-3 text-black/75">{<CountUp end={100} duration={8}/>}+</h4>
        </div>
        {/* Card three  */}
        <div className="border bg-white/90 rounded-md border-gray-200 shadow-md p-4 flex flex-col items-center">
            <div className="p-3 bg-[#a38ffd]/15 rounded-full w-fit">
                <img src={tutorial} alt="" className="w-14"/>
            </div>
            <p className="text-xl font-semibold my-3 text-gray-800">Our Tutorials</p>
            <h4 className="text-3xl font-bold my-3 text-black/75">{<CountUp end={26} duration={8}/>}+</h4>
        </div>
        {/* Card four  */}
        <div className="border bg-white/90 rounded-md border-gray-200 shadow-md p-4 flex flex-col items-center">
            <div className="p-3 bg-[#a38ffd]/15 rounded-full w-fit">
                <img src={word} alt="" className="w-14"/>
            </div>
            <p className="text-xl font-semibold my-3 text-gray-800">Total Vocabulary</p>
            <h4 className="text-3xl font-bold my-3 text-black/75">{<CountUp end={350} duration={6}/>}+</h4>
        </div>

      </div>
    </div>
  );
};

export default OurSuccess;
