import styles from './PlanetDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as solarSystemService from '../../services/solarSystemService';

export default function PlanetDetails() {
    const [planet, setPlanet] = useState([]);
    const { planetId } = useParams();

    useEffect(() => {
        solarSystemService.getDetails(planetId).then(setPlanet);
    }, [planetId]);

    return (
        <main className={styles['main']}>
            <section className={styles['card-component']}>
                <div className={styles['card-img']}>
                    <img src={planet.image} alt={planet.title} />
                </div>
                <div className={styles['card-desc']}>
                    <h3>{planet.title}</h3>
                    <h4>I. Introduction</h4>
                    <p>{planet.introduction}</p>
                    <h4>II. Namesake</h4>
                    <p>{planet.namesake}</p>
                    <h4>III. Orbit And Rotation</h4>
                    <p>{planet.orbitAndRotation}</p>
                    <h4>IV. Size And Distance</h4>
                    <p>{planet.sizeAndDistance}</p>
                    <h4>V. Moons</h4>
                    <p>{planet.moons}</p>
                    <h4>VI. Formation</h4>
                    <p>{planet.formation}</p>
                </div>
            </section>
        </main>
    );
}
