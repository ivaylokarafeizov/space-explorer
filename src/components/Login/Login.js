import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import eyeSpace from '../../assets/eye_space.jpg';
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../hooks/useForm';

const LoginFormKeys = {
    email: 'email',
    password: 'password',
};

export default function Login() {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm(
        {
            [LoginFormKeys.email]: '',
            [LoginFormKeys.password]: '',
        },
        onLoginSubmit
    );

    return (
        <main
            className={styles['main']}
            style={{ backgroundImage: `url(${eyeSpace})` }}
        >
            <form
                className={styles['form']}
                id='login'
                method='POST'
                onSubmit={onSubmit}
            >
                <h3>Login</h3>
                <label className={styles['label']} htmlFor='email'>
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    placeholder='bruceWayne@abv.bg'
                    name={LoginFormKeys.email}
                    value={values[LoginFormKeys.email]}
                    onChange={changeHandler}
                />
                <label className={styles['label']} htmlFor='password'>
                    Password
                </label>
                <input
                    type='password'
                    placeholder='********'
                    id='password'
                    name={LoginFormKeys.password}
                    value={values[LoginFormKeys.password]}
                    onChange={changeHandler}
                />
                <button type='submit' value='Login'>
                    Log In
                </button>
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
