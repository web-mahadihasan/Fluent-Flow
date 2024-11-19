import ReactPlayer from "react-player";

const Tutorials = ({videoURL}) => {
    const url = "https://www.youtube.com/watch?v=RuGmc662HDg&list=PLF9mJC4RrjIhS4MMm0x72-qWEn1LRvPuW"
    return (
        <div data-aos="flip-up" className='w-full h-full object-center shadow'>
            <ReactPlayer url={videoURL}
            controls
            muted
            className="overflow-hidden"
            width={"100%"}
            height={"100%"}
            />
        </div>
    );
};

export default Tutorials;