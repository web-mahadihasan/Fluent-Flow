import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Authentication from "../pages/Authentication";
import Login from "../components/Login";
import Signup from "../components/Signup";
import StartLearning from "../pages/StartLearning";
import LessonDetails from "../pages/LessonDetails";
import Home from "../pages/Home";
import ForgotPassword from "../components/ForgotPassword";
import TutorialsPage from "../pages/TutorialsPage";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import MyProfile from "../pages/MyProfile";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <NotFound/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: async () => {
                const reviewRes = await fetch("/review.json");
                const reviewData = await reviewRes.json()

                const articleRes = await fetch("/articles.json")
                const articleData = await articleRes.json()
                
                return {reviewData, articleData}
            }
        },
        {
            path: "/auth",
            element: <Authentication/>,
            children: [
                {
                    path: "/auth/",
                    element: <Login/>
                },
                {
                    path: "/auth/login",
                    element: <Login/>
                },
                {
                    path: "/auth/signup",
                    element: <Signup/>
                },
                {
                    path: "/auth/forgot-password",
                    element: <ForgotPassword/>
                }
            ]
        },
        {
            path: "/start-learning",
            element: <StartLearning/>,
            loader: async() => {
                const lessonRes = await fetch("/lesson.json");
                const lessonData = await lessonRes.json()

                const videoRes = await fetch("/videos.json")
                const videoData = await videoRes.json()
                
                return {lessonData, videoData}
            }
        },
        {
            path: "/start-learning/:lessonId",
            element: <PrivateRoute><LessonDetails/></PrivateRoute>,
            loader: () => fetch("/UpdatedVocabularyList.json")
        },
        {
            path: "/tutorials",
            element: <PrivateRoute><TutorialsPage/></PrivateRoute>,
            loader: () => fetch("/videos.json")
        },
        {
            path: "/my-profile",
            element: <MyProfile/>
        },
      ]
    },
  ]);

  export default Router;