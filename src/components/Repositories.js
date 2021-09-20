import { Container,Typography } from '@material-ui/core'
import React from 'react';
import styles from '../../styles/Repositories.module.css';
import { repositories } from '../data/open_source';
import { useRouter } from 'next/dist/client/router';
import StarIcon from '@material-ui/icons/Star';

const Repositories = () => {
    const router = useRouter()
    return (
        <Container maxWidth="lg">
            <Typography variant="h4" align="center">Open Source</Typography>
            <div className={styles.parent_container}>
            {repositories.map((repository,i)=>(
                <div className={styles.cards} key={i} onClick={()=>router.push(repository.link)}>
                    <p className={styles.card_title}><StarIcon style={{marginRight:"5px"}} />{repository.title}</p>
                    <p className={styles.card_content}>{repository.content}</p>
                </div>
            ))}
                
            </div>
            
        </Container>
    )
}

export default Repositories
