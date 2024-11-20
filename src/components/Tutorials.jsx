import ReactPlayer from "react-player";

const Tutorials = ({videoURL}) => {
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