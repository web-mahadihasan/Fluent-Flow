import { Button } from "@material-tailwind/react";
import { GoArrowRight } from "react-icons/go";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import Tutorials from "../components/Tutorials";

const StartLearning = () => {
  const lessonInfo = useLoaderData();
  const navigate = useNavigate()
  return (
    <div className="container mx-auto px-4 xl:px-0 relative">
      {/* start learn banner  */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[400px] my-10">
        <div className="flex flex-col justify-center">
          <h3 className="text-4xl font-semibold py-5 leading-relaxed">Discover, Learn, and Speak German Effortlessly</h3>
          <p className="text-gray-600">
            "Learn German
            vocabulary step by step with practical lessons designed for everyday
            life. Build your skills, expand your knowledge, and speak
            confidently in real-world situations." 
            
            <p className="py-4">Take the first step towards mastering German vocabulary</p>
          </p>
          <Button variant="filled" className="bg-[#a38ffd] w-fit">Let's Learn</Button>
        </div>
        <div className="flex justify-end">
          <img
            src="https://i.ibb.co.com/fnsqZ6X/lesson-removebg-preview.png"
            alt=""
            className="h-full"
          />
        </div>
      </div>

      <SectionTitle title="German Vocabulary Mastery" subTitle="our German vocabulary lessons guide you through essential words and phrases to help you speak with confidence and clarity"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lessonInfo.map((lesson) => (
          <div
            key={lesson.lesson_no}
            className="space-y-2 rounded-md border border-[#36B64F]/20 shadow-md p-4 flex flex-col"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {lesson.lesson_name}
            </h3>
            <p className="text-base font-medium text-black/65">
              Lesson No. {lesson.lesson_no}
            </p>
            <p className="flex-1 text-base font-medium text-black/65">
              Duaration: {lesson.duration_time}
            </p>
            <Link to={`/start-learning/${lesson.lesson_no}`} className="w-fit ">
                <Button variant="filled" className="bg-[#a38ffd] flex items-center gap-2">Start Lesson <GoArrowRight size={18} /></Button>
            </Link>
          </div>
        ))}
      </div>

      {/* <div>
        <SectionTitle title="German Alphabet Made Easy" subTitle="Watch step-by-step videos to learn the German alphabet with proper pronunciation, preparing you for confident communication."/>
        <div className="bg-gray-100 rounded-xl mb-10">
          <div className="relative px-6 py-10">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-indigo-100"
              >
                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {lessonInfo.map((lesson) => (
                <div
                  key={lesson.lesson_no}
                  className="h-[260px] space-y-2 p-4 flex flex-col rounded-md border border-[#36B64F]/20 overflow-hidden text-left transition-shadow duration-200 bg-white shadow-xl"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lesson.lesson_name}
                  </h3>
                  <p className="text-base font-medium text-black/65">
                    Lesson No. {lesson.lesson_no}
                  </p>
                  <p className="flex-1 text-base font-medium text-black/65">
                    Duaration: {lesson.duration_time}
                  </p>
                  <Link to={`/start-learning/${lesson.lesson_no}`} className="w-fit ">
                    <Button variant="filled" className="bg-[#a38ffd] flex items-center gap-2">Start Lesson <GoArrowRight size={18} /></Button>
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div> */}

      {/* Tutorial section  */}
      <div className="mb-6">
        <SectionTitle title="German Alphabet Made Easy" subTitle="Watch step-by-step videos to learn the German alphabet with proper pronunciation, preparing you for confident communication."/>

        <div className="bg-gray-100 rounded-xl mb-10">
          <div className="relative px-6 py-10">
            <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
              <svg
                viewBox="0 0 88 88"
                className="w-full max-w-screen-xl text-indigo-100"
              >
                <circle fill="currentColor" cx="44" cy="44" r="15.5" />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="44"
                />
                <circle
                  fillOpacity="0.2"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="37.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="29.5"
                />
                <circle
                  fillOpacity="0.3"
                  fill="currentColor"
                  cx="44"
                  cy="44"
                  r="22.5"
                />
              </svg>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {lessonInfo.slice(0,6).map((lesson) => (
                <div
                  key={lesson.lesson_no}
                  className="h-[260px] space-y-2 flex flex-col rounded-md border border-[#36B64F]/20 overflow-hidden text-left transition-shadow duration-200 bg-white shadow-xl"
                >
                  <Tutorials/>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 relative z-30">
              <Button onClick={() => navigate("/tutorials")} variant="filled" className="bg-[#a38ffd]">View more </Button>
            </div>
            
          </div>
        </div>
      </div>
      {/* first div  */}
    </div>
  );
};

export default StartLearning;
