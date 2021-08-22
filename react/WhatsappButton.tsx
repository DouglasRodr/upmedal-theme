import React from 'react';

import styles from './whatsappButton.css';

interface WhatsappButtonProps {
    src?: string,
    url?: string
}

function WhatsappButton(props: WhatsappButtonProps) {
    const {
        src,
        url
      } = props
    return (
        <a href={url} 
        className={`${styles.whatsappButton}`} target="_blank">
            <img className={`${styles.whatsappIcon}`} src={src}></img>
        </a>
    );
}

export default WhatsappButton;