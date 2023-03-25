import styles from './Footer.module.css';
import galaxy from '../../assets/galaxy.png';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <nav>
                <ul className={styles['footer-ul']}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/solarSystem'>Solar System</Link>
                    </li>
                    <li>
                        <Link to='/famousAstronauts'>Famous Astronauts</Link>
                    </li>
                    <li>
                        <Link to='/photoOfTheDay'>Photo of the Day</Link>
                    </li>
                    <li>
                        <Link to='/posts'>Posts</Link>
                    </li>
                </ul>
                <img src={galaxy} alt='galaxy' />
                <div className={styles['contact']}>
                    <p>Follow on</p>
                    <Link
                        to='https://github.com/ivaylokarafeizov'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FaGithub className={styles['github-icon']} />
                    </Link>
                </div>
            </nav>
        </footer>
    );
}
