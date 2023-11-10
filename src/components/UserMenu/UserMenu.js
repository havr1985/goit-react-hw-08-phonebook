import { useDispatch, useSelector } from "react-redux";
import { selectAuthUserData } from "redux/auth.selector";
import { logOutThunk } from "redux/authSlice";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectAuthUserData);

    const onLogOut = () => {
        dispatch(logOutThunk());
    };

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={onLogOut}>Log Out</button>
        </div>
        
    )
} 