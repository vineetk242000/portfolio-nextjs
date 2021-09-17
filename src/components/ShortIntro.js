import { Button, Container, makeStyles } from '@material-ui/core'
import React from 'react';
import styles from '../../styles/Top.module.css';
import { user } from '../data/user';


const useStyles = makeStyles((theme) => ({
    button: {
        width: '50%',
        ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
            marginLeft:"15px",
            width: "30%"
        }
    }
}));

const Shortuser = () => {
    const className = useStyles()
    return (
        <Container maxWidth="sm">
            <div className={styles.parent_container}> 
                <h1 className={styles.hightlight_text}>I'm {user.name}</h1>
                <p className={styles.short_intro}>{user.short_intro}</p>
                <div className={styles.action_button_container}>
                    <a href={user.resume}>
                        <Button 
                            className={styles.button}
                            variant="contained" 
                            style={{ backgroundColor: "white", color: "#00C3FF", boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",marginTop:"18px",padding:"0.5rem 0" }}>
                            View Resume
                        </Button>
                    </a>
                    <a href={`mailto:${user.email}`}>
                        <Button 
                            className={styles.button}
                            variant="contained" 
                            color="primary" 
                            style={{ backgroundColor: "#00C3FF", boxShadow: " 0 15px 25px -2px rgba(104, 220, 255, 1), 0 10px 10px -5px rgba(0,0,0, 0.04)",marginTop:"18px",padding:"0.5rem 0" }}> 
                                Get in Touch
                        </Button>
                    </a>
                </div>
                </div>
        </Container>
    )
}

export default Shortuser
