import styles from '../../styles/Footer.module.css'
import React from 'react'
import { Container, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {user} from '../data/user';
import { useRouter } from 'next/dist/client/router';

const Footer = () => {
    const router = useRouter()
    return (
        <div className={styles.parent_container}>
            <div className={styles.top_section} >
                <Container maxWidth="lg">
                    <div className={styles.footer_container}>
                        <p className={styles.my_name}>{user.name}</p>
                        <ul className={styles.list}>
                            <li className={styles.list_item}>Home</li>
                            <li className={styles.list_item}>About</li>
                            <li className={styles.list_item}>Blog</li>
                            <li className={styles.list_item}>Contact</li>
                        </ul>
                        <div className={styles.social_media_container}>
                            <p>Follow me on</p>
                            <div style={{cursor:"pointer"}}>
                                <GitHubIcon className={styles.icons} onClick={()=>router.push(user.social.github)} />
                                <LinkedInIcon className={styles.icons} onClick={()=>router.push(user.social.linkdin)} />
                                <FacebookIcon className={styles.icons} onClick={()=>router.push(user.social.facebook)}/>
                                <InstagramIcon className={styles.icons} onClick={()=>router.push(user.social.instagram)} />
                                <TwitterIcon className={styles.icons} onClick={()=>router.push(user.social.twitter)}/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className={styles.bottom_section}>
                    <p>Designed by <span style={{color:"#00A4FF"}}>Vineet Kumar</span></p>
                </div>
            </Container>

        </div>
    )
}

export default Footer
