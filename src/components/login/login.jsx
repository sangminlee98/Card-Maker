import React, { useEffect } from 'react';
import styles from './login.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router';

const Login = ({authService}) => {
    const history = useNavigate();
    const goToMaker = (userId) => {
        history({
            pathname: '/maker',
            state: {id: userId},
        });
    }
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent)
        .then(data => goToMaker(data.user.uid));
    }

    useEffect(()=>{
        authService.onAuthChange(user=> {
            user&&goToMaker(user.uid);
        })
    })

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