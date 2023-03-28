import styles from './Body.module.css';
import { Link } from 'react-router-dom';

export default function Body(body) {
    return (
        <section className={styles['card-component']} key={body._id}>
            <div className={styles['card-image']}>
                <img src={body.image} alt={body.name} />
            </div>
            <div className={styles['card-desc']}>
                <h3>{body.name}</h3>
                <p>{body.description}</p>
                <p>Age: {body.age}</p>
                <p>Length of Year: {body.yearLength}</p>
                <p>Diameter: {body.diameter}</p>
                <p>Moons: {body.moons}</p>
                <Link
                    to={`/details/planets/${body._id}`}
                    className={styles['btn-a']}
                >
                    <div className={styles['continue-btn']}>Read More</div>
                </Link>
            </div>
        </section>
    );
}
