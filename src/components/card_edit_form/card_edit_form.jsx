import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card,updateCard,onDelete,FileInput}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const {name,company,title,email,message,theme,fileName,fileURL} = card;
    const onSubmit = () => {
        onDelete(card);
    }

    const onFileChange = (file) => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }

    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name] : event.currentTarget.value,
        });
    }

    return(
        <form ref={formRef} className={styles.form} >
            <input ref={nameRef} onChange={onChange} className={styles.input} type="text" name="name" value={name} />
            <input ref={companyRef} onChange={onChange} className={styles.input} type="text" name="company" value={company} />
            <select ref={themeRef} onChange={onChange} className={styles.select} name="theme" value={theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="colorful">Colorful</option>
            </select>
            <input ref={titleRef} onChange={onChange} className={styles.input} type="text" name="title" value={title} />
            <input ref={emailRef} onChange={onChange} className={styles.input} type="text" name="email" value={email} />
            <textarea ref={messageRef}onChange= {onChange} className={styles.textarea} name="message" value={message} />
            <div className={styles.fileInput}>
                <FileInput onFileChange={onFileChange} name={fileName}/>
            </div>
            <Button name='Delete' onClick={onSubmit} />

        </form>
    )
}

export default CardEditForm;