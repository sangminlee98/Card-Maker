import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo((props) => {
    console.log("footer");
    return(
        <footer className={styles.footer}>
            <p className={styles.footerText}>
                Code your dream
            </p>
        </footer>
    )
});

export default Footer;