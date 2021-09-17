import { Container } from '@material-ui/core'
import { EmailRounded } from '@material-ui/icons';
import React from 'react';
import { user } from '../src/data/user';
import styles from '../styles/About.module.css';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const About = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>About Me</title>
                <meta name="portfolio" content="Vineet K Portfolio Website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Container maxWidth="lg">
                    <div className={styles.parent_container}>
                        <div className={styles.left_container}>
                            <h1 className={styles.title}>About Me</h1>
                            <p className={styles.text}>{user.about}</p>
                            <p className={styles.text} style={{ lineHeight: "1" }}>For any queries get in touch with me at:</p>
                            <div className={styles.email_container}>
                                <EmailRounded style={{ marginRight: "10px" }} />
                                <p style={{ fontWeight: "500" }}>{user.email}</p>
                            </div>
                        </div>
                        <div className={styles.right_container}>
                            <img src={user.image} alt="me" className={styles.image}></img>
                        </div>
                    </div>
                    <div>
                        
                        <div className={styles.social_media_container}>
                        <p className={styles.social_media_container_header}>Connect with me on the web</p>
                                <GitHubIcon className={styles.icons} fontSize="large" onClick={()=>router.push(user.social.github)} />
                                <LinkedInIcon className={styles.icons} fontSize="large" onClick={()=>router.push(user.social.linkdin)} />
                                <FacebookIcon className={styles.icons} fontSize="large" onClick={()=>router.push(user.social.facebook)}/>
                                <InstagramIcon className={styles.icons} fontSize="large" onClick={()=>router.push(user.social.instagram)} />
                                <TwitterIcon className={styles.icons} fontSize="large" onClick={()=>router.push(user.social.twitter)}/>
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    )
}

export default About
