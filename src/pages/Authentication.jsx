import { Button } from "@material-tailwind/react";
import { NavLink, Outlet } from "react-router-dom";

const Authentication = () => {
    return (
        <div className="container mx-auto px-4 xl:px-10 shadow-md border min-h-[700px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center my-10">
            <div className="lg:col-span-1 xl:col-span-2 bg-authbg bg-center bg-no-repeat bg-cover h-full flex flex-col items-start justify-center">
                <h1>Welcome back to our
                Community</h1>
                <p>Start your language learning journey with us and join our community</p>
                <Button ripple={true} className="mt-16 font-semibold text-sm">Explore our community </Button>
            </div>
            <div className="">
                {/* <div className="my-5 py-3 px-2 bg-black/15 w-fit mx-auto rounded-full">
                    <NavLink to={"/auth/login"} className={`py-2 px-4 bg-black/40 rounded-full mr-4`}>LOGIN</NavLink>
                    <NavLink to={"/auth/signup"}>SIGNUP</NavLink>
                </div> */}
                <Outlet/>
            </div>
        </div>
    );
};

export default Authentication;