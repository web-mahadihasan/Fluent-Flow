import { useLoaderData, useNavigate } from "react-router-dom";
import Tutorials from "../components/Tutorials";
import { Button } from "@material-tailwind/react";
import SectionTitle from "../components/SectionTitle";

const TutorialsPage = () => {
    const videos = useLoaderData()
    const navigate = useNavigate()
    console.log(videos)
    return (
        <div className="container mx-auto px-4 xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center my-8 p-6">
                <div>
                    <h3 className="text-3xl max-w-xl leading-relaxed font-bold">Our video Guides help you to learn <span className="text-[#a38ffd]">German alphabet</span></h3>
                    <p className="text-black/75 my-4">Learn the German alphabet with our video guides, featuring clear pronunciations and practical examples for easy understanding</p>
                </div>
                <img src="https://i.ibb.co.com/f2JFDBx/tutorialpng.png" alt="" className="h-[400px] mx-auto" />
            </div>

            <div>
                <SectionTitle title="Learn with Ease, Interactive Tutorials" subTitle="The German alphabet consists of 26 standard letters, just like English, but with a few unique additions: Ä, Ö, Ü (umlauts) and ß (Eszett or sharp S). Watch one by one"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-24">
                {
                    videos.map((video, idx) => <div key={idx} className="h-[260px]"><Tutorials videoURL={video}/></div> )
                }
            </div>
            <div className="my-8 text-center">
                <Button onClick={()=> navigate("/start-learning")} variant="filled" className="bg-[#a38ffd]">Learn Vocabularies</Button>
            </div>
        </div>
    );
};

export default TutorialsPage;