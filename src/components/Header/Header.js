import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className={styles['header']}>
            <nav className={styles['header-nav']}>
                <h1>
                    <span className={styles['space-span']}>Space</span>
                    <span className={styles['explorer-span']}>Explorer</span>
                </h1>
                <ul>
                    <li className={styles['nav-li']}>
                        <NavLink
                            to='/'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'black' : '',
                                };
                            }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles['nav-li']}>
                        <NavLink
                            to='/solarSystem'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'black' : '',
                                };
                            }}
                        >
                            Solar System
                        </NavLink>
                    </li>
                    <li className={styles['nav-li']}>
                        <NavLink
                            to='/famousAstronauts'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'black' : '',
                                };
                            }}
                        >
                            Famous Astronauts
                        </NavLink>
                    </li>
                    <li className={styles['nav-li']}>
                        <NavLink
                            to='/photoOfTheDay'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'black' : '',
                                };
                            }}
                        >
                            Photo of the Day
                        </NavLink>
                    </li>
                    <li className={styles['nav-li']}>
                        <NavLink
                            to='/posts'
                            style={({ isActive }) => {
                                return {
                                    color: isActive ? 'black' : '',
                                };
                            }}
                        >
                            Posts
                        </NavLink>
                    </li>
                    {isAuthenticated ? (
                        <li>
                            <NavLink
                                to='/logout'
                                className={styles['logOut-btn']}
                            >
                                Logout
                            </NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink
                                to='/login'
                                className={styles['signIn-btn']}
                            >
                                Sign In
                            </NavLink>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
