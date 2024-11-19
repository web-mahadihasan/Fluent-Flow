import { useContext } from "react";
import { AuthProviderContext } from "../providers/AuthProvider";
import { Navigate, useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProviderContext)
    const {pathname} = useLocation()

    if(loading){
        return <Loader/>
    }

    if(user && user.email){
        return children;
    }

    return (
        <Navigate to={"/auth/login"} state={pathname}></Navigate>
    );
};

export default PrivateRoute;