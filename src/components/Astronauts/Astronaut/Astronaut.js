import styles from './Astronaut.module.css';
import { Link } from 'react-router-dom';

export default function Astronaut(astronaut) {
    return (
        <section className={styles['card-component']} key={astronaut._id}>
            <div className={styles['card-image']}>
                <img src={astronaut.image} alt={astronaut.name} />
            </div>
            <div className={styles['card-desc']}>
                <h3>{astronaut.name}</h3>
                <p>{astronaut.description}</p>
            </div>
            <Link
                to={`/details/astronauts/${astronaut._id}`}
                className={styles['btn-a']}
            >
                <div className={styles['continue-btn']}>Read More</div>
            </Link>
        </section>
    );
}
