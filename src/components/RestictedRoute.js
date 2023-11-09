import { useSelector } from "react-redux"
import { selectAuthAuthenticated } from "redux/auth.selector"
import { AuthNav } from "./AuthNav/AuthNav";


export const RestictedRoute = ({ children, redirectTo = '/contacts' }) => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return authenticated ? <AuthNav to={redirectTo} replice /> : children;
};