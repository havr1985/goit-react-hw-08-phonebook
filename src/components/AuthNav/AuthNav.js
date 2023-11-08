import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    )
}