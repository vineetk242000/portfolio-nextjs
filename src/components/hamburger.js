import React, { useState } from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { Backdrop } from '@material-ui/core';
import styles from '../../styles/Header.module.css';
import ClearAllRoundedIcon from '@material-ui/icons/ClearAllRounded';
import { useRouter } from 'next/dist/client/router';

const Hamburger = (props) => {
    const router = useRouter()
    const [clicked, setclicked] = useState(false)
    const handleHamburgerClick = () => {
        var x = document.getElementById("myLinks");
        if (x.style.display === 'none') {
            x.style.display = 'flex';
            props.setopen(true);
            setclicked(true)
        } else {
            x.style.display = 'none';
            props.setopen(false);
            setclicked(false)
        }

    }
    return (
        <div>
            <Backdrop open={props.open} style={{ zIndex: "1000" }} onClick={handleHamburgerClick} />
            {clicked ?
                <ClearAllRoundedIcon
                    fontSize="medium"
                    onClick={handleHamburgerClick}
                    style={{ position: 'relative', zIndex: "1002" }}
                /> : <MenuRoundedIcon
                    fontSize="medium"
                    onClick={handleHamburgerClick}
                    style={{ position: 'relative', zIndex: "1002" }}
                />
            }

            <ul className={styles.myLinks} id="myLinks">
                <li style={{ marginTop: "4rem" }} onClick={() => router.push('/')}>
                    Home
                </li>
                <li onClick={() => router.push('/about')}>
                    About
                </li>
                <li onClick={() => router.push('https://bphtech.blogspot.com/')}>
                    Blog
                </li>
                <li onClick={() => router.push('/contact')}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Hamburger
