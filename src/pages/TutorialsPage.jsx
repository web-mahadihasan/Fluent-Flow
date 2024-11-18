import { useLoaderData } from "react-router-dom";
import Tutorials from "../components/Tutorials";

const TutorialsPage = () => {
    const videos = useLoaderData()
    console.log(videos)
    return (
        <div className="container mx-auto px-4 xl:px-0">
            <div className="h-[250px] bg-purple-400">
                <h3 className="text-2xl font-bold">Our video Guides help you to learn German alphabet</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-24">
                {
                    videos.map((video, idx) => <div key={idx} className="h-[260px]"><Tutorials videoURL={video}/></div> )
                }
            </div>
        </div>
    );
};

export default TutorialsPage;