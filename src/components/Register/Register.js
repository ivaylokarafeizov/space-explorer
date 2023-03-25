import styles from './Register.module.css';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <main className={styles['main']}>
            <form className={styles['form']}>
                <h3>Register</h3>
                <label className={styles['label']} htmlFor='username'>
                    Username
                </label>
                <input
                    className={styles['normal']}
                    type='text'
                    placeholder='Username'
                    id='username'
                />
                <label className={styles['label']} htmlFor='email'>
                    Email
                </label>
                <input
                    className={styles['normal']}
                    type='email'
                    placeholder='Email'
                    id='email'
                />
                <div className={styles['double']}>
                    <div className={styles['inputGroup']}>
                        <label className={styles['label']} htmlFor='password'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Password'
                            id='password'
                        />
                    </div>
                    <div className={styles['inputGroup']}>
                        <label className={styles['label']} htmlFor='rePass'>
                            Repeat Password
                        </label>
                        <input
                            type='password'
                            placeholder='Repeat Password'
                            id='rePass'
                        />
                    </div>
                </div>
                <button>Register</button>
                <div className={styles['actions']}>
                    <Link to='/login'>
                        <div className={styles['login']}>Login</div>
                    </Link>
                    <Link to='/'>
                        <div className={styles['home']}>Home</div>
                    </Link>
                </div>
            </form>
        </main>
    );
}
