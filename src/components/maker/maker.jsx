import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const location = useLocation();
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }
    useEffect(()=> {
        authService.onAuthChange(user => {
            if(!user) {
                navigate('/');
            }
        });
        console.log(location);
    });
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.makerContents}>
                <Editor/>
                <Preview/>
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;