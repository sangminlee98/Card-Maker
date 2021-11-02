import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = (props) => {
    return(
        <div className={styles.login}>
            <Header/>
            <div className={styles.loginContent}>
                <h1>Login</h1>
            </div>
            <Footer/>
        </div>
    )
}
        
    

export default Login;