import { Button } from "@material-tailwind/react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-[#F5FCFF] grid gap-6 grid-cols-1 md:grid-cols-2 items-center justify-center p-4 lg:p-8 mt-6 mb-24 rounded-md">
        <div>
          <p className="bg-[#a38ffd]/25 my-4 py-2 px-8 w-fit rounded-bl-[20px] rounded-tr-[20px]">
            Hi! There,
          </p>
          <h3 className="text-3xl font-bold text-black/75 my-4">
            I am a{" "}
            <span className="text-[#a38ffd]">&lt;Full Stack Developer&gt;</span>
          </h3>
          <p className="leading-6 text-black/65 my-8">
            A versatile Full Stack Developer skilled in building scalable web
            applications, seamlessly blending front-end creativity with back-end
            efficiency.
          </p>
          <a href="https://drive.google.com/file/d/1ZoXQF0kHwfFK82PYt76AYeQgx8CKs5GB/">
            <Button variant="filled" className="bg-[#a38ffd] tracking-wider">
              Download CV
            </Button>
          </a>
        </div>
        <div className="bg-aboutBg bg-no-repeat bg-bottom mt-10 md:mt-0">
          <img
            src="https://i.ibb.co.com/Bc6FSdW/mypic.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>

      {/* About me  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-2xl text-[#a38ffd] font-bold text-center mb-6">About me</h3>
          <p className="text-black/65">
            I am a dedicated and passionate Full Stack Developer with a focus on
            creating efficient, user-friendly, and visually appealing web
            applications. My expertise spans both front-end and back-end
            technologies, allowing me to deliver seamless digital experiences.
          </p>
          <h4 className="text-xl font-semibold text-black/70 my-4">
            Key Skills and Expertise
          </h4>
          <ul className="list-disc pl-10 space-y-2">
            <li>
              <h3 className="text-lg font-semibold">HTML & CSS</h3>
              <p className="text-black/70 my-1">
                Proficient in creating structured, responsive, and visually
                appealing layouts for a seamless user experience.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">Tailwind CSS</h3>
              <p className="text-black/70 my-1">
                Skilled in designing modern and consistent interfaces using
                utility-first styling.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">JavaScript</h3>
              <p className="text-black/70 my-1">
                Adept at developing dynamic and interactive web functionalities
                for enhanced usability.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-semibold">React</h3>
              <p className="text-black/70 my-1">
                Experienced in building scalable, component-based applications
                with a focus on performance.
              </p>
            </li>
          </ul>
        </div>
        <div>

            
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
