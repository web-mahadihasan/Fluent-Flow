import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProviderContext)

    if(loading){
        return <Loader/>
    }

    if(user && user.email){
        return children;
    }

    return (
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;