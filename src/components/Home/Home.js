import styles from './Home.module.css';
import solarSystem from '../../assets/solar_system.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className={styles['cards']}>
            <section className={styles['site-intro']}>
                <h2>Want to know more</h2>
                <h3>about space?</h3>
                <p>
                    Here you will find out more about the Solar System and many
                    other interesting things.
                </p>
            </section>
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
        </main>
    );
}
