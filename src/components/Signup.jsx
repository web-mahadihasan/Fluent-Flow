import { Button, Checkbox, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../providers/AuthProvider";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
    const [seePassword, setSeePassword] = useState(false)
    const [seeRepeatPassword, setSeeRepeatPassword] = useState(false)
    const [showError, setShowError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()

    const {createNewUser, loginWithGoogle} = useContext(AuthProviderContext)

    const handleSignup = (e) => {
        e.preventDefault()
        const passwordValidation = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        if(!passwordValidation.test(password)){
            return  setShowError({...showError, password: "Password must have one uppercase, one lower case, number and 6 digits"})
        }
        const repeatPassword = form.get("repeatPassword")
        if(repeatPassword !== password){
            return  setShowError({...showError, repeatPassword: "Your password don't matched"})
        }
        const isChecked = form.get("checkbox")
        if(!isChecked){
            toast.error("Accept our terms & conditions.")
            return
        }
        
        createNewUser(email, password)
        .then((result) => {
            toast.success("Successfully Create your account")
            navigate(location?.state ? location.state : "/")
        }).catch(error => {
            console.log(error)
        })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then((result) => {
          toast.success("successfull login")
          navigate(location?.state ? location.state : "/")
        }).catch((error) => {
          toast.error("Failed to log in.")
        })
      }
    return (
        <div className="px-4 py-8 z-10">
            <h3 className="text-center my-10 uppercase text-2xl font-semibold">Create a new account</h3>
            <form onSubmit={handleSignup} className="space-y-4">
                {/* Name  */}
                <div className="">
                    <Input type="text" name="name" inputMode="text" required
                    label="Your Name"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
                </div>
                {/* Email  */}
                <div className="">
                    <Input type="email" name="email" inputMode="email" required
                    label="Email"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
                </div>
                {/* password  */}
                <div className="relative">
                    <Input type={seePassword? "text" : "password"} name="password" inputMode="password" required
                    label="Password"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
                    <div onClick={()=> setSeePassword(!seePassword)} className="absolute right-2 top-3">
                        {seePassword ?<IoEyeOffOutline size={18} />:<FaRegEye size={18} />}
                    </div>
                    {
                      showError.password && <p className="text-xs my-1 text-red-600">{showError.password}</p>  
                    }
                </div>
                {/* Repeat password  */}
                <div className="relative">
                    <Input type={seeRepeatPassword? "text" : "password"} name="repeatPassword" inputMode="password" required
                    label="Repeat Password"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
                    <div onClick={()=> setSeeRepeatPassword(!seeRepeatPassword)} className="absolute right-2 top-3">
                        {seeRepeatPassword ?<IoEyeOffOutline size={18} />:<FaRegEye size={18} />}
                    </div>
                    {
                      showError.repeatPassword && <p className="text-xs my-1 text-red-600">{showError.repeatPassword}</p>  
                    }
                </div>
                {/* Image  */}
                <div className="">
                    <input  name="imgFile" type="file" className="file-input file-input-bordered file-input-md w-full" />
                </div>
                {/* Checkbox  */}
                <div className="flex items-center  gap-1">
                    <Checkbox label="" name="checkbox" />
                    <label htmlFor="" className="text-sm">I agree with the <a href="" className=" text-blue-500">terms & conditions.</a> </label>
                </div>
                {/* Submit  */}
                <Button fullWidth type="submit" className="text-sm font-semibold tracking-wider ">Sign up</Button>
            </form>
            <p className=" text-black/60 my-5 text-center text-base">Already have an account? <Link to={"/auth/login"} className="underline text-blue-500 hover:text-black/70 duration-300">Log in here</Link></p>
            <div className="divider text-sm text-black/75">Or Connect with</div>
            <Button onClick={handleGoogleLogin}
                variant="outlined"
                className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-black/75"
            >
                <FcGoogle size={20} />
                Sign up with Google
            </Button>
    </div>
    );
};

export default Signup;