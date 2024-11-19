import HomeAbout from "../components/HomeAbout";
import MainBanner from "../components/MainBanner";
import OurSuccess from "../components/OurSuccess";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainBanner/>
      {/* About us  */}
      <div className="container mx-auto px-4 xl:px-0">
        <HomeAbout/>
      </div>

      <OurSuccess/>
    </div>
  );
};

export default Home;
