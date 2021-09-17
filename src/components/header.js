import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import Hamburger from './hamburger';
import { user } from '../data/user';

const Header = () => {
    const [open, setopen] = useState(false)
    return (
        <header className={styles.header}>
            <Container maxWidth="lg">

                <nav className={styles.navbar}>
                    <h2 className={styles.my_name}>{user.name}</h2>
                    <div className={styles.navbar_items}>
                        <div className={styles.hamburger_container}>
                            <Hamburger setopen={setopen} open={open} setopen={setopen} />
                        </div>
                        <ul className={styles.list}>

                            <li className={styles.list_items}><Link href="/"><a>Home</a></Link></li>
                            <li className={styles.list_items}><Link href="/about"><a>About</a></Link></li>
                            <li className={styles.list_items}><Link href="/"><a>Blog</a></Link></li>
                            <li className={styles.list_items}><Link href="/contact"><a>Contact</a></Link></li>

                        </ul>
                    </div>
                </nav>
            </Container>
        </header>

    )
}

export default Header
