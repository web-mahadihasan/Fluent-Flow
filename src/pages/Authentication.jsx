import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Outlet, useLocation } from "react-router-dom";

const Authentication = () => {
    const {pathname} = useLocation()
    const [authText, setAuthText] = useState("")
    
    useEffect(() => {
        if(pathname === "/auth/signup"){
            setAuthText("Join Our Community and Start Your Journey!")
        }else if(pathname === "/auth/login"){
            setAuthText("Welcome back to our Community")
        }else{
            setAuthText("Forgot your password? No worries!")
        }
    }, [pathname])
    return (
        <div className="container mx-auto px-4 xl:px-10 shadow-md border min-h-[700px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center my-10 font-popins">
            <Helmet>
                <title>Fluent Flow | Auth</title>
            </Helmet>
            <div className="lg:col-span-1 xl:col-span-2 bg-authbg bg-center bg-no-repeat bg-cover h-full flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold text-black/80 my-8">{authText}</h1>
                <p className="max-w-2xl text-lg text-black/65">Start your German language learning journey with us today and become part of a vibrant, supportive community.</p>
                <Link to={"/start-learning"}><Button ripple={true} className="mt-10 font-semibold text-sm">Explore our community </Button></Link>
            </div>
            <div className="">
                <Outlet/>
            </div>
        </div>
    );
};

export default Authentication;