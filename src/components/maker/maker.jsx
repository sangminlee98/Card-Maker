import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService,FileInput, cardRepository}) => {
    const historyState = useLocation()?.state;
    const [cards,setCards] = useState({});
    const [userId,setUserId] = useState(historyState && historyState.id);

    const navigate = useNavigate();
    const onLogout = useCallback(() => {
        authService.logout();
    },[authService]);
    
    useEffect(()=> {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } else {
                navigate('/');
            }
        });
    },[authService,userId,navigate]);

    useEffect( ()=> {
        if(!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => stopSync();
    },[userId, cardRepository]);

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card);
    }

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId,card);
    }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.makerContents}>
                <Editor cards={cards} addCard={createOrUpdateCard} deleteCard={deleteCard} updateCard={createOrUpdateCard} FileInput={FileInput}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
}

export default Maker;