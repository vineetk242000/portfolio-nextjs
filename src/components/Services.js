import { Container, Typography } from '@material-ui/core'
import React from 'react';
import styles from '../../styles/Services.module.css'

const Services = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center">Services</Typography>
                <div className={styles.parent_container}>
                    <div className={styles.child_container}>
                        <img src='img/website_creator1.gif' alt="web dev" className={styles.image} />
                        <p className={styles.title}>Web Development</p>
                        <p className={styles.description}>Get your Ecommerce website running within a month built with the MERN stack</p>
                    </div>
                    <div className={styles.child_container}>
                        <img src='img/app_developement.gif' alt="app dev" className={styles.image} />
                        <p className={styles.title}>App Development</p>
                        <p className={styles.description}>Turn your idea into reality with a Mobile App build with Flutter</p>
                    </div>
                    <div className={styles.child_container} >
                        <img src='img/blog_post.gif'alt="tech blogging" className={styles.image} />
                        <p className={styles.title}>Tech Blogging</p>
                        <p className={styles.description}>Get regular tech blogs for your website</p>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Services
