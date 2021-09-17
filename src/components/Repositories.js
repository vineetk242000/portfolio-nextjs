import { Container,Typography } from '@material-ui/core'
import React from 'react';
import styles from '../../styles/Repositories.module.css';

const Repositories = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h4">Open Source</Typography>
            <div className={styles.parent_container}>
                <div className={styles.cards}>
                    <p>Text Analysis Telegram Bot</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className={styles.cards}>
                    <p>Text Analysis Telegram Bot</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className={styles.cards}>
                    <p>Text Analysis Telegram Bot</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <div className={styles.cards}>
                    <p>Text Analysis Telegram Bot</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            
        </Container>
    )
}

export default Repositories
