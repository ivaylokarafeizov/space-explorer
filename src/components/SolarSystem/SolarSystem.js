import styles from './SolarSystem.module.css';
import Body from './Body/Body.js';
import { useState, useEffect } from 'react';
import * as solarSystemService from '../../services/solarSystemService';

export default function SolarSystem() {
    const [bodies, setBodies] = useState([]);

    useEffect(() => {
        solarSystemService.getAll().then(setBodies);
    }, []);

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>
                {bodies.map((data) => (
                    <Body key={data._id} {...data} />
                ))}
            </section>
        </main>
    );
}
