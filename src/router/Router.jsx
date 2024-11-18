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


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <NotFound/>,
      children: [
        {
            path: "/",
            element: <Home/>
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
            loader: () => fetch("/lesson.json")
        },
        {
            path: "/start-learning/:lessonId",
            element: <PrivateRoute><LessonDetails/></PrivateRoute>,
            loader: () => fetch("/germanVocabulary.json")
        },
        {
            path: "/tutorials",
            element: <TutorialsPage/>,
            loader: () => fetch("/videos.json")
        },
      ]
    },
  ]);

  export default Router;