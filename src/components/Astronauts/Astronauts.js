import styles from './Astronauts.module.css';
import Astronaut from './Astronaut/Astronaut.js';
import { useState, useEffect } from 'react';
import * as astronautsService from '../../services/astronautsService';

export default function Astronauts() {
    const [astronauts, setAstronauts] = useState([]);

    useEffect(() => {
        astronautsService.getAll().then(setAstronauts);
    }, []);

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>
                {astronauts.map((data) => (
                    <Astronaut key={data._id} {...data} />
                ))}
            </section>
        </main>
    );
}
