import { useSelector } from "react-redux"
import { selectAuthAuthenticated } from "redux/auth.selector"
import { AuthNav } from "./AuthNav/AuthNav";


export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return authenticated ? children : <AuthNav to={redirectTo} replace/>

}