import styles from './Register.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import eyeSpace from '../../assets/eye_space.jpg';

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm(
        { email: '', username: '', password: '', confirmPassword: '' },
        onRegisterSubmit
    );

    return (
        <main
            className={styles['main']}
            style={{ backgroundImage: `url(${eyeSpace})` }}
        >
            <form
                className={styles['form']}
                id='register'
                method='post'
                onSubmit={onSubmit}
            >
                <h3>Register</h3>
                <label className={styles['label']} htmlFor='username'>
                    Username
                </label>
                <input
                    className={styles['normal']}
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Bruce Wayne'
                    value={values.username}
                    onChange={changeHandler}
                />
                <label className={styles['label']} htmlFor='email'>
                    Email
                </label>
                <input
                    className={styles['normal']}
                    type='email'
                    id='email'
                    name='email'
                    placeholder='maria@email.com'
                    value={values.email}
                    onChange={changeHandler}
                />
                <div className={styles['double']}>
                    <div className={styles['inputGroup']}>
                        <label className={styles['label']} htmlFor='password'>
                            Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='register-password'
                            placeholder='***********'
                            value={values.password}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className={styles['inputGroup']}>
                        <label className={styles['label']} htmlFor='rePass'>
                            Repeat Password
                        </label>
                        <input
                            type='password'
                            name='confirmPassword'
                            placeholder='***********'
                            id='confirm-password'
                            value={values.confirmPassword}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <button type='submit' value='Register'>
                    Register
                </button>
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
