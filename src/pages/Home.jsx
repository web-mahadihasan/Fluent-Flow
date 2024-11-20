import { useLoaderData } from "react-router-dom";
import HomeAbout from "../components/HomeAbout";
import MainBanner from "../components/MainBanner";
import OurSuccess from "../components/OurSuccess";
import UserReview from "../components/UserReview";
import SectionTitle from "../components/SectionTitle";
import ReadArticles from "../components/ReadArticles";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const {reviewData, articleData} = useLoaderData()

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Fluent Flow | Home</title>
      </Helmet>
      <MainBanner/>
      {/* About us  */}
      <div className="container mx-auto px-4 xl:px-0">
        <HomeAbout/>
      </div>
      
      {/* Our success  */}
      <div>
        <OurSuccess/>
      </div>

      {/* User Review  */}
      <div className="container mx-auto px-4 xl:px-0">
        <SectionTitle title="Success Stories from Our Users" subTitle="Discover what our users say about their journey of mastering German vocabulary with our platform. Real experiences, genuine feedback, and success stories from learners worldwide!"/>
        <UserReview reviewData={reviewData}/>
      </div>

      {/* Article section  */}
      <div className="container mx-auto px-4 xl:px-0">
        <ReadArticles articleData={articleData}/>
      </div>

    </div>
  );
};

export default Home;
