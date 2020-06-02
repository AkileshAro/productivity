import React, { useContext, useCallback } from 'react'
import { withRouter, Redirect } from 'react-router';
import app from '../../../firebase';
import { AuthContext } from '../../../Auth';

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
               <input type="email" name='email' placeholder="Email" />
                </label>
                <label>
                    Password
               <input type="password" name='password' placeholder='Password' />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login);
