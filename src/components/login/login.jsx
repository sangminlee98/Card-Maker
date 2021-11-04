import React from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(console.log("d"));
    }
    return(
        <section className={styles.login}>
            <Header/>
            <h1>Login</h1>
            <ul>
                <li><button className={styles.button} onClick={onLogin}>Google</button></li>
                <li><button className={styles.button} onClick={onLogin}>Github</button></li>
            </ul>
            <Footer/>
        </section>
    )
}
        
    

export default Login;