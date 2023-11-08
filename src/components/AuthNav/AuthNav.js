import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}