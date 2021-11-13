import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader,name,onFileChange}) => {
    const inputRef = useRef();
    const [loading,setLoading] = useState(false);
    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    }
    
    return(
        <div className={styles.container}>
            <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange} />
            <button className={`${styles.button} ${name ? styles.selectedImg : styles.noImg}`} onClick={onButtonClick}>
                {
                    loading === true ?
                    <div>
                        <i className="fas fa-spinner fa-spin"></i> 
                    </div> :
                    name || 'No file'   
                }
            </button>
        </div>
    )
}

export default ImageFileInput;