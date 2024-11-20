import { Button } from "@material-tailwind/react";
import DisplayProject from "../components/DisplayProject";
import SectionTitle from "../components/SectionTitle";
import SkillsProgress from "../components/SkillsProgress";
  

const AboutUs = () => {
    const skills = [
        { name: "HTML", progress: 90 },
        { name: "CSS & Tailwind", progress: 80 },
        { name: "JavaScript", progress: 70 },
        { name: "React", progress: 75 },
      ];
    const skillsTitle = [
        {title: "HTML & CSS", subTitle: "Proficient in creating structured, responsive, and visually appealing layouts for a seamless user experience."},
        {title: "Tailwind CSS", subTitle: "Skilled in designing modern and consistent interfaces using utility-first styling."},
        {title: "JavaScript", subTitle: "Adept at developing dynamic and interactive web functionalities for enhanced usability."},
        {title: "React", subTitle: "Experienced in building scalable, component-based applications with a focus on performance."}
    ]
  return (
    <div className="container mx-auto px-4">
      <div data-aos="fade-up" className="bg-[#F5FCFF] grid gap-6 grid-cols-1 md:grid-cols-2 items-center justify-center p-4 lg:p-8 mt-6 mb-24 rounded-md">
        <div data-aos="fade-right">
          <p className="bg-[#a38ffd]/25 my-4 py-2 px-8 w-fit rounded-bl-[20px] rounded-tr-[20px]">
            Hi! There,
          </p>
          <h3 className="text-4xl leading-relaxed font-bold text-black/75 my-4">
            I am Mahadi Hasan, A {" "}
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
        <div data-aos="fade-left" className="bg-aboutBg bg-no-repeat bg-bottom mt-10 md:mt-0">
          <img
            src="https://i.ibb.co.com/Bc6FSdW/mypic.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </div>

      {/* About me  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div data-aos="zoom-in-up">
          <h3 className="text-3xl text-[#a38ffd] font-bold text-center mb-6">About me</h3>
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
            {
                skillsTitle.map((skillTitle ,idx)=> <li key={idx}>
                <h3 className="text-lg font-semibold">{skillTitle.title}</h3>
                <p className="text-black/70 my-1">
                  {skillTitle.subTitle}
                </p>
              </li>)
            }
          </ul>
        </div>


        <div>
            <h3 className="text-3xl text-[#a38ffd] font-bold text-center mb-6">My Skills</h3>
            <div>
            <div className="grid grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                    <SkillsProgress key={index} skill={skill.name} targetProgress={skill.progress} />
                ))}
                </div>
            </div>
        </div>
      </div>

      {/* Project display  */}
      <div>
        <div>
            <SectionTitle title="Showcase of My Work and Creations" subTitle="Explore my collection of projects that highlight my expertise in crafting innovative, user-friendly, and efficient web solutions using modern technologies."/>
        </div>

        <div data-aos="flip-up" className="mb-24">
            <DisplayProject/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
