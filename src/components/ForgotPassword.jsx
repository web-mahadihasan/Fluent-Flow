import { Button, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="px-4 py-8 z-10">
            <div>
            <h3 className="text-center my-10 uppercase text-2xl font-semibold">Reset your passowrd</h3>
                <form className="space-y-5">
                <div>
                    <Input name="email" type="email" inputMode="text"
                    label="Enter your email"
                    className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none shadow-lg bg-base-200 py-4" />
                </div>
                <Button type="submit" fullWidth className="text-sm font-semibold tracking-wider">Reset Password</Button>
                </form>
            </div>
            <div className="divider">Or</div>
            <p className="font-medium text-black/70 my-8 text-center"><Link to={"/auth/login"} className="underline text-blue-500 hover:text-black/70 duration-300">Log in</Link> with password.</p>
        </div>
    );
};

export default ForgotPassword;