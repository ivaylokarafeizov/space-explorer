import styles from './Astronauts.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAll } from '../../services/astronautsService';

export default function Astronauts() {
    const [astronauts, setAstronauts] = useState([]);

    useEffect(() => {
        getAll()
            .then(setAstronauts)
            .catch((err) => console.log('Error' + err));
    }, []);

    const cards = astronauts.map((astronaut) => (
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
    ));

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>{cards}</section>
        </main>
    );
}
