import React, { useRef } from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card,onDelete}) => {
    const emailRef = useRef();
    const formRef = useRef();
    const {name,company,title,email,message,theme,fileName,fileURL} = card;
    const onSubmit = (event) => {
        event.preventDefault();
        const mailAddr = emailRef.current.value;
        onDelete(mailAddr);
    }
    return(
        <form ref={formRef} className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <input className={styles.input} type="text" name="company" value={company} />
            <select className={styles.select} name="theme" value={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} />
            <input ref={emailRef} className={styles.input} type="text" name="email" value={email} />
            <textarea className={styles.textarea} name="message" value={message} />
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />

        </form>
    )
}

export default CardEditForm;