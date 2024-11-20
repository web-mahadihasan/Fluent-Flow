import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";

const WelcomeMessage = () => {
    const {user} = useContext(AuthProviderContext)

    return (
        <div className="w-fullflex items-center justify-center bg-[#b7a7ff] text-center">
            <p className="font-medium py-2">Welcome Back, {user?.displayName}</p>
        </div>
    );
};

export default WelcomeMessage;