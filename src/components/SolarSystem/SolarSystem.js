import styles from './SolarSystem.module.css';
import Body from './Body/Body.js';
import { useState, useEffect } from 'react';
import { getAll } from '../../services/solarSystemService';

export default function SolarSystem() {
    const [bodies, setBodies] = useState([]);

    useEffect(() => {
        getAll()
            .then(setBodies)
            .catch((err) => console.log('Error' + err));
    }, []);

    const cards = bodies.map(Body);

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>{cards}</section>
        </main>
    );
}
