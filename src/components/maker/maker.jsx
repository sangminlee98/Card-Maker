import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards,setCards] = useState([
        {id: '1',
        name: 'Sangmin',
        company: 'samsung',
        theme: 'colorful', 
        title: 'Frontend Engineer',
        email: 'tkdals09789@gmail.com',
        message: 'go for it',
        fileName: 'sangmin',
        fileURL: null
        },
        {id: '2',
        name: 'Jacdoo',
        company: 'kakao',
        theme: 'dark', 
        title: 'Backend Engineer',
        email: 'dhkdhkd72@gmail.com',
        message: 'Hi,there',
        fileName: 'jacdoo',
        fileURL: 'jacdoo.png'
        },
        {id: '3',
        name: 'Angel',
        company: 'No',
        theme: 'light', 
        title: 'CoinAnalizer',
        email: 'khslhs1@gmail.com',
        message: 'zonber',
        fileName: 'angel',
        fileURL: null
        },
    ])
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
                <Editor cards={cards}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;