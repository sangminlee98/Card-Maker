import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
    return(
        <header className={styles.header}>
            <img className={styles.headerImg} src="/images/logo.png"/>
            <h2 className={styles.headerText}>Business Card Maker</h2>
        </header>
    )

}

export default Header;