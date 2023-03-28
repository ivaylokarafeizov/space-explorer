import styles from './Astronauts.module.css';
import Astronaut from './Astronaut/Astronaut.js';
import { useState, useEffect } from 'react';
import { getAll } from '../../services/astronautsService';

export default function Astronauts() {
    const [astronauts, setAstronauts] = useState([]);

    useEffect(() => {
        getAll()
            .then(setAstronauts)
            .catch((err) => console.log('Error' + err));
    }, []);

    const cards = astronauts.map(Astronaut);

    return (
        <main className={styles['main']}>
            <section className={styles['cards']}>{cards}</section>
        </main>
    );
}
