import React, { useCallback } from 'react'
import { withRouter } from 'react-router';
import app from '../../../firebase';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';

const Register = ({ history }) => {
   const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
         await app.auth().createUserWithEmailAndPassword(email.value, password.value);
         history.push('/');
      } catch (err) {
         alert(err);
      }
   }, [history]);
   return (
      <div className={styles.registerContainer}>
         <div className={styles.register}>
            <h3 className={styles.heading}>CREATE AN ACCOUNT</h3>
            <form onSubmit={handleSignUp} className={styles.registerForm}>
               <input type="email" name='email' placeholder="Email" className={styles.input} />
               <input type="password" name='password' placeholder='Password' className={styles.input} />
               <button type='submit' className={styles.submit}>Sign Up</button>
               <p className={styles.signInLink}>Already have an account? <Link to='/login' className={styles.signInLinkTag}>Sign In</Link></p>
            </form>
         </div>
      </div>
   )
}

export default withRouter(Register);
