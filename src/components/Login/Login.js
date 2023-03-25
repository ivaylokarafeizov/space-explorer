import styles from './Login.module.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <main className={styles['main']}>
            <form className={styles['form']}>
                <h3>Login</h3>
                <label className={styles['label']} htmlFor='username'>
                    Username
                </label>
                <input type='text' placeholder='Username' id='username' />
                <label className={styles['label']} htmlFor='password'>
                    Password
                </label>
                <input type='password' placeholder='Password' id='password' />
                <button>Log In</button>
                <div className={styles['actions']}>
                    <Link to='/register'>
                        <div className={styles['create-acc']}>
                            Create account
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className={styles['home']}>Home</div>
                    </Link>
                </div>
            </form>
        </main>
    );
}
