import styles from './Home.module.css';
import solarSystem from '../../assets/solar_system.jpg';
import HomeIntro from './HomeIntro/HomeIntro';
import { useAuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Home() {
    const { isAuthenticated } = useAuthContext();

    return (
        <main className={styles['cards']}>
            <HomeIntro />
            <section className={styles['card-component']}>
                <div className={styles['card-image']}>
                    <img src={solarSystem} alt='Solar System' />
                </div>
                <div className={styles['card-desc']}>
                    <h3>Solar System</h3>
                    <p>
                        Our solar system consists of our star, the Sun, and
                        everything bound to it by gravity - the planets Mercury,
                        Venus, Earth, Mars, Jupiter, Saturn, Uranus, and
                        Neptune; dwarf planets such as Pluto; dozens of moons;
                        and millions of asteroids, comets, and meteoroids.
                    </p>
                    <Link className={styles['learnMore-btn']} to='/solarSystem'>
                        Learn More
                    </Link>
                </div>
            </section>
            {isAuthenticated ? (
                ''
            ) : (
                <section className={styles['benefits']}>
                    <h3>
                        <Link to='/login'>Sign in</Link> or{' '}
                        <Link to='/register'>register</Link> in order to access:
                    </h3>
                    <ul>
                        <li>Our Blog Page</li>
                        <li>Our Comments Section</li>
                    </ul>
                </section>
            )}
        </main>
    );
}
