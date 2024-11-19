import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {

    const {updateUserProfile, user} = useContext(AuthProviderContext)
    const navigate = useNavigate()

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const image = form.get("image")
        updateUserProfile({displayName: name, photoURL:image})
        .then((result) => {
            toast.success("Successfully Update you information")
            navigate("/my-profile")
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center min-h-[700px]">
            <div data-aos="flip-left" className="p-8 min-h-[500px] border-[#a38ffd] rounded-md shadow-md shadow-base-200 w-[450px] border">
            <img src={user?.photoURL} alt="" className="w-20 h-20 mx-auto ring-4 object-center ring-[#9b84fd] rounded-full bg-white"/>
                <h3 className="text-center mt-8 text-xl text-black/70 font-semibold">Update your profile Information</h3>
                <div className="">
                    <form onSubmit={handleUpdateProfile} className="space-y-5 flex flex-col justify-center">
                        <div className="mt-6">
                            <label htmlFor="image" className="block mb-2 text-lg font-medium text-black/65">
                                Your Name
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" />
                        </div>
                        <div className="">
                            <label htmlFor="image" className="block mb-2 text-lg font-medium text-black/65">
                                Your Profile Image
                            </label>
                            <input type="text" name="image" placeholder="Your photo url" className="input input-bordered w-full" />
                        </div>
                        <div className="pt-6">
                            <Button type="submit" variant="filled" className="bg-[#a38ffd] tracking-wider w-full">Update Information</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;