import React, { useContext, useCallback } from 'react'
import { withRouter, Redirect } from 'react-router';
import app from '../../../firebase';
import { AuthContext } from '../../../Auth';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = ({ history }) => {
    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await app.auth().signInWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch (err) {
            alert(err);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />
    }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.login}>
                <h3 className={styles.heading}>SIGN IN TO YOUR ACCOUNT</h3>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <input type="email" name='email' placeholder="Email" className={styles.input} />
                    <input type="password" name='password' placeholder='Password' className={styles.input} />
                    <br />
                    <button type='submit' className={styles.submit}>SIGN IN</button>
                    <p className={styles.signUpLink}>New here? <Link to='/register' className={styles.signUpLinkTag}>Sign Up</Link></p>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);
