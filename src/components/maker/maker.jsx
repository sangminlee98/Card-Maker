import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const location = useLocation();
    const history = useNavigate();
    const onLogout = () => {
        authService.logout();
    }
    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                history('/');
            }
        });
        console.log(location);
    });
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.makerContents}>
                
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;