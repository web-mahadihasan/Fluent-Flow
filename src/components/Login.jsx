import { Button, Checkbox, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthProviderContext } from "../providers/AuthProvider";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { RiInformationOffLine } from "react-icons/ri";
import toast from "react-hot-toast";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false)
  const [showError, setShowError] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const {loginUser, loginWithGoogle, setUser, setForgotEmail} = useContext(AuthProviderContext)

  const handleLoginEmail = (e) => {
    const email = e.target.value
    setForgotEmail(email)
  }
  const handleLogin = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const email = form.get("email")
    const password = form.get("password")

    loginUser(email, password)
    .then((result) => {
      toast.success("Successfull login")
      setUser(result.user)
      navigate(location?.state ? location.state : "/")
    }).catch((error) => {
      console.log(error)
      if(error = "auth/invalid-credential"){
        setShowError({ ...showError, invalid:"Your enter email or password is invalid"})
      }
    })
  }
  // Google login 
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
      <h3 className="text-center my-10 uppercase text-2xl font-semibold">Log in to you account</h3>
        {
          showError.invalid && <p className="text-red-600 flex items-center gap-1 my-3"><RiInformationOffLine size={24} /> {showError.invalid}</p>
        }
      <form onSubmit={handleLogin} className="space-y-4">
        {/* Email  */}
        <div className="">
            <Input onChange={handleLoginEmail} type="email" name="email" inputMode="email" required
            label="Your Email"
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
        </div>
        {/* Password  */}
        <div className="relative">
            <Input type={seePassword? "text" : "password"} name="password" inputMode="password" required
            label="Your Password"
            className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-5" />
            <div onClick={()=> setSeePassword(!seePassword)} className="absolute right-2 top-3">
                {seePassword ?<IoEyeOffOutline size={18} />:<FaRegEye size={18} />}
            </div>
        </div>
        {/* Forgot password  */}
        <div className="flex items-center justify-between">
          <Checkbox label="Remember Me" />
          <Link to={"/auth/forgot-password"} className="hover:text-blue-500 duration-300 text-base text-black/75 cursor-pointer">Forgot password?</Link>
        </div>
        {/* Login button  */}
        <Button fullWidth type="submit" className="text-sm font-semibold tracking-wider ">Log in</Button>
      </form>
      
      <p className="font-medium text-black/60 my-5 text-center text-base">Don't have an account? <Link to={"/auth/signup"} className="underline text-blue-500 hover:text-black/70 duration-300">Sign up here</Link></p>
      <div className="divider text-sm text-black/75">Or Connect with</div>
      <Button onClick={handleGoogleLogin}
        variant="outlined" className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-black/75">
        <FcGoogle size={20} /> Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
