import styles from './PhotoOfTheDay.module.css';
import { useState, useEffect } from 'react';
import { getPhoto } from '../../services/photoOfTheDayService';

export default function Planets() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        getPhoto()
            .then(setPhoto)
            .catch((err) => console.log('Error' + err));
    }, []);

    return (
        <main className={styles['main']}>
            <img src={photo.hdurl} alt={photo.title} />
            <section className={styles['card-component']}>
                <div className={styles['card-desc']}>
                    <h3>{photo.title}</h3>
                    <h4>{photo.date}</h4>
                    <p>{photo.explanation}</p>
                </div>
            </section>
        </main>
    );
}
