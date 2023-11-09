import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/auth.selector';
import { logOutThunk } from 'redux/authSlice';

export const AuthNav = () => {
    const authenticated = useSelector(selectAuthAuthenticated);
    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(logOutThunk());
    };


    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            {authenticated ? (
                <>
                <NavLink to='/contacts'>Contacts</NavLink>
                <button onClick={onLogOut}>Log Out</button>
                </>): 
                (<>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                 </>)}
        </nav>
    )
}