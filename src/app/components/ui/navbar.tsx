import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const Nav = () => {

    const dispatch = useDispatch();

    const handleLogout = () => dispatch(startLogout());

    return <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/students/list'>Estudiantes</Link>
        <Link to='/drivers'>Conductores</Link>
        <Link to='/afluencia'>Afluencia</Link>
        <button onClick={ handleLogout }>Logout</button>
    </nav>
}

export default Nav;