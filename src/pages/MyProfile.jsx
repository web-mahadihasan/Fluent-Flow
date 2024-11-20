import { Button } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../providers/AuthProvider";

const MyProfile = () => {
    const navigate = useNavigate()
    const [greeting, setGreeting] = useState("")
    const [savedLesson, setSaveLesson] = useState([])

    const { user} = useContext(AuthProviderContext)

    useEffect(()=> {
        const currentHour = new Date().getHours();
        if (currentHour < 5) return setGreeting("Good Night");
        if (currentHour < 12) return setGreeting("Good Morning");
        if (currentHour < 18) return setGreeting("Good Afternoon");
        return setGreeting("Good Evening");

    }, [])
    return (
        <div className="max-w-5xl mx-auto px-4 xl:px-0">

          <div data-aos="fade-up" data-aos-duration="500" className="rounded-2xl border mt-8 shadow">
            <div className="flex items-center justify-center h-[200px] bg-gradient-to-r from-[#c4b8fb] to-[#9c87fd] border rounded-t-2xl">
                <h1 data-aos="zoom-in-up" className="text-3xl font-semibold">{greeting} , {user?.displayName}</h1>
            </div>
            <div className="max-w-4xl mx-auto relative">
                <img src={ user?.photoURL} alt="" className="w-24 absolute -top-10 h-24 ring-4 object-center ring-[#9b84fd] rounded-full bg-white"/>
            </div>
            <div className="max-w-4xl mx-auto mt-20">
                <h3 className="text-2xl font-semibold">{user?.displayName}</h3>
                <p className="text-lg text-black/70">{user?.email} <span className={`py-[2px] ml-2 px-4 text-base rounded-full ${user?.emailVerified ? "bg-[#8FD985]" : "bg-[#FFD6D6]"}`}>{user?.emailVerified? "Varified" : "Unverified"}</span></p>
                <p className="text-lg text-black/70 my-1">Phone: N/A</p>
                <div className=" my-6 space-x-4">
                    <Button onClick={() => navigate("/my-profile/update-profile")} variant="filled" className="bg-[#a38ffd] tracking-wider">Edit Profile</Button>
                    <Button onClick={() => navigate("/start-learning")} variant="outlined" className="border border-[#a38ffd] text-[#8d74ff]">Back to lesson</Button>
                </div>
            </div>
          </div>

          {/* Dashborad  */}
          <div className="min-h-[50px] my-6 p-6 border">
            <h3 className="text-xl font-semibold text-black/70">Dashboard</h3>
            {
                savedLesson.length < 0 ? "" : <h3 className="text-red-400 text-2xl font-semibold my-8">You don't Save any lesson now 🥺</h3>
            }
          </div>

        </div>
    );
};

export default MyProfile;

