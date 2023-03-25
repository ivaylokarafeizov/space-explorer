import styles from './AstronautDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAstronautDetails } from '../../services/astronautsService';

export default function AstronautDetails() {
    const [astronaut, setAstronaut] = useState([]);
    const { astronautId } = useParams();

    useEffect(() => {
        getAstronautDetails(astronautId)
            .then(setAstronaut)
            .catch((err) => console.log('Error' + err));
    }, [astronautId]);

    return (
        <main className={styles['main']}>
            <img src={astronaut.image} alt={astronaut.name} />
            <section className={styles['card-component']}>
                <div className={styles['card-desc']}>
                    <h3>{astronaut.name}</h3>
                    <h4>Nationality: {astronaut.nationality}</h4>
                    <h5>Born: {astronaut.birthDateAndPlace}</h5>
                    {astronaut.deathDateAndPlace === 'Still Alive' ? (
                        ''
                    ) : (
                        <h5>Died: {astronaut.deathDateAndPlace}</h5>
                    )}
                    <p>{astronaut.information}</p>
                </div>
            </section>
        </main>
    );
}
