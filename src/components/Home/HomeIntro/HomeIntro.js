import styles from './HomeIntro.module.css';

export default function HomeIntro() {
    return (
        <section className={styles['site-intro']}>
            <h2>Want to know more</h2>
            <h3>about space?</h3>
            <p>
                Here you will find out more about the Solar System and many
                other interesting things.
            </p>
        </section>
    );
}
